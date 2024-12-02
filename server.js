const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialisation de l'application Express
const app = express();

// Middleware
app.use(cors()); // Pour autoriser les requêtes provenant de différents domaines
app.use(bodyParser.json()); // Pour analyser le JSON dans le corps des requêtes

// Connexion à MongoDB
mongoose
  .connect(
    "mongodb+srv://miryam:miryam123@cluster0.aul0uik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Le Modèle pour les emails
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Email = mongoose.model("Email", emailSchema);

// Les Routes
app.post("/newsletters", async (req, res) => {
  const { email } = req.body;

  // Validation simple de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Adresse email invalide." });
  }

  try {
    // Vérifier si l'email existe déjà
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Cet email est déjà inscrit." });
    }

    // Sauvegarder l'email dans la base de données
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({ message: "Inscription réussie à la newsletter !" });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur du serveur. Veuillez réessayer." });
  }
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});