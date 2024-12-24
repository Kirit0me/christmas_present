import Snowfalls from "./Snowfalls";
import TextSlideshow from './TextSlideshow';

function App() {
  const paragraphs = [
    "Merry Christmas Shiki-nya",
    "I love you",
    "This season is the most magical for me this year",
    "Because, I have you, the gift I cherish beyond measure.",
    "I am not that good with words but I wanted to take this event's opportunity to write a letter to you",
    "In my own nerdy way, through a website I created.",
    "No matter wherever we are in this world, as long as I am alive you will always be here, in my heart.",
    "Thank you for slowing down my life to live it to the fullest.",
    "Thank you for making me appreciate the little good things in life.",
    "Thank you for teaching me art and drawing with me.",
    "Thank you for devoting so much time of your life to me",
    "Thank you for making me happy, over and over again.",
    "Continue being in my life forever.",
    "Aisheteru, your beloved Kiri-nya"
  ];

  return (
    <>
    <Snowfalls />
    <div className="h-screen bg-main w-screen bg-cover text-white flex justify-end">
      <div className="w-2/3 h-screen">
        <TextSlideshow paragraphs={paragraphs} duration={5000} />
      </div>
      
    </div>
    </>
  )
}

export default App
