import React from "react";

const url = "https://discordapp.com/api/guilds/550309736214691840/widget.json";
const App = () => {
  const [status, setStatus] = React.useState(0);
  React.useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((j) => setStatus(j.members[15].status))
  }, []);
    
  if (status === "online") {
    return <div className="font-bold text-gray-700 rounded-full bg-green-500 flex w-5 h-5 items-center justify-center"></div>
  }else{
    if (status === "idle") {
      return <div className="font-bold text-gray-700 rounded-full bg-yellow-500 flex w-5 h-5 items-center justify-center"></div>
    }else{
      if (status === "dnd") {
        return <div className="font-bold text-gray-700 rounded-full bg-red-500 flex w-5 h-5 items-center justify-center"></div>
      }else{
        return <div className="font-bold text-gray-700 rounded-full bg-gray-500 flex w-5 h-5 items-center justify-center"></div>
      }
    }
  }
};

export default App;