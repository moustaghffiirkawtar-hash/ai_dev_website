let members = [
  {
    name: "Fatima Zahrae Er-raqi",
    role: "President",
    pic: "img/presidente.jpg",
  },
  {
    name: "Younes El Kadmiri",
    role: "Vice President",
    pic: "img/vicepresident.jpg",
  },
  {
    name: "Mohamed BEN DIFI",
    role: "Head of the Design Unit",
    pic: "img/mohammed.jpg",
  },
  { name: "Taoufik AMZIL", role: "Speaker", pic: "img/toufik.jpg" },
  { name: "Wiam boulif", role: "General Secretary", pic: "img/wiam.jpg" },
  {
    name: "Echabbi majda",
    role: "Head of the Media Unit",
    pic: "img/presidente.jpg",
  },
  {
    name: "HIba Benhammou",
    role: "Head of the Media Unit",
    pic: "img/hibaaa.png",
  },
  { name: "SARA RIZK", role: "Events Manager", pic: "img/sara.jpg" },
  {
    name: "Fatima Ez-zahraa HAJARI",
    role: "Human Resources Manager",
    pic: "img/rh.jpg",
  },
  { name: "Meryem Mouktader", role: "Treasurer", pic: "img/meriem.jpg" },
];

function ListOfMembers() {
  return (
    <>
      {members.map((member) => (
        <div className="member" key={member.name}>
          <img src={member.pic} className="pic" alt={member.name} />
          <h3 className="name">{member.name}</h3>
          <p className="role">{member.role}</p>
        </div>
      ))}
    </>
  );
}

export default ListOfMembers;
