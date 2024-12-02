import { useEffect, useState } from "react";
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log("Données de documents:", docSnap.data());
      } else {
        console.log("L'utilisateur n'est pas connecté");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("Vous avez été déconnecté avec succès !");
    } catch (error) {
      console.log("Erreur lors de la déconnexion", error.message);
    }
  };

  return (
    <div>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.name}</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Name : {userDetails.name}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Déconnecter
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
