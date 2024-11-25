import Image from "next/image";

export default function MessageList({messages}) {
  return (
    <>
          {
            messages?.map((message) => (
              <div key={message.id} style={{marginTop: 20 + "px", marginBottom: 20 + "px", display: "flex", justifyContent:"flex-start", alignItems: "center"}}>
                <Image 
                src={message.author.profile_picture != null ? `https://chat-app-mu-blush.vercel.app${message.author.profile_picture}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                width={50} height={50} style={{borderRadius: 100 + "%", objectFit:"cover" }} quality={100} priority={true} unoptimized alt="Perfil">
                </Image>
                
                <span style={{marginLeft: 10 +"px"}}><b>{message.author.name}: </b>{message.content}</span>
              </div>
            ))
          }    
    </>
  )
}


//C:\Users\Sam-sephiol\Desktop\frontend\src\img\no-photo.jpg
  