import Image from "next/image";

function renderMessageWithLinks(message) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return message.split(" ").map((word, index) => {
    if (urlRegex.test(word)) {
      return (
        <a
          key={index}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: 'blue' }}
        >
          {word}
        </a>
      );
    }
    return word + " ";
  });
}

export default function MessageList({ messages }) {
  return (
    <>
      {messages?.map((message) => (
        <div
          key={message.id}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            src={
              message.author.profile_picture
                ? `https://chat-app-mu-blush.vercel.app${message.author.profile_picture}`
                : "/img/no-photo.jpg"
            }
            width={50}
            height={50}
            style={{ borderRadius: "100%", objectFit: "cover" }}
            quality={100}
            priority={true}
            unoptimized
            alt="Perfil"
          />
          <span style={{ marginLeft: "10px" }}>
            <b>{message.author.name}:</b> {renderMessageWithLinks(message.content)}
          </span>
        </div>
      ))}
    </>
  );
}














/** 
import Image from "next/image";

export default function MessageList({messages}) {
  return (
    <>
          {
            messages?.map((message) => (
              <div key={message.id} style={{marginTop: 20 + "px", marginBottom: 20 + "px", display: "flex", justifyContent:"flex-start", alignItems: "center"}}>
                <Image 
                src={message.author.profile_picture != null ? `https://chat-app-mu-blush.vercel.app${message.author.profile_picture}` : "img/no-photo.jpg"}
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

 * 
 * <Image 
                src={message.author.profile_picture != null ? `https://chat-app-mu-blush.vercel.app${message.author.profile_picture}` : "img/no-photo.jpg"}
                width={50} height={50} style={{borderRadius: 100 + "%", objectFit:"cover" }} quality={100} priority={true} unoptimized alt="Perfil">
                </Image>
 * 
**/
