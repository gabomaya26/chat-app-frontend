'use client';

import "@/styles/ProfileEditModal.css"
import { updateProfilePicture } from "@/utils/api-chat";
import { useState } from "react";

export default function ProfileEditModal({username, onClose, onProfileUpdated}) {

    const [profilePicture, setProfilePicture] = useState(null)

    const handleFileChange = async (e) => {
        setProfilePicture(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("profile_picture", profilePicture)

        const response = await updateProfilePicture(formData, username)

        if (response.status == 200) {
            onProfileUpdated();
            onClose();
        }
        else {
            console.log("Error al actualizar el perfil")
        }
    }

  return (
    <div className="modal">
        <div className="modal-content">
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="profile_picture">Foto de perfil</label>
                <input type="file" style={{ marginTop: 10 + "px"}} onChange={handleFileChange} name="profile_picture" accept="image/*" required />
                <button type="submit" style={{ marginTop: 20 + "px", marginBottom: 20 + "px"}}>Enviar</button>&nbsp;&nbsp;
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    </div>
  )


}
