function ListOfMembers() {
  const members = [
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
    { name: "Wiam Boulif", role: "General Secretary", pic: "img/wiam.jpg" },
    {
      name: "Echabbi Majda",
      role: "Head of the Media Unit",
      pic: "img/majda.jpg",
    },
    {
      name: "Hiba Benhammou",
      role: "Head of the Media Unit",
      pic: "img/hibaaa.png",
    },
    { name: "Sara Rizk", role: "Events Manager", pic: "img/sara.jpg" },
    {
      name: "Fatima Ez-zahraa Hajari",
      role: "Human Resources Manager",
      pic: "img/rh.jpg",
    },
    { name: "Meryem Mouktader", role: "Treasurer", pic: "img/meriem.jpg" },
  ];

  const handleMemberClick = (memberName) => {
    alert(`You clicked on: ${memberName}`);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        {/* White Page, Blue Title */}
        <h2 style={{ color: "var(--club-blue)" }}>Meet Our Team</h2>
        <p className="text-muted">The people behind the AI & Dev Community</p>
      </div>

      <div className="row g-4 justify-content-center">
        {members.map((member) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={member.name}>
            <div
              className="card h-100 member-card"
              onClick={() => handleMemberClick(member.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleMemberClick(member.name)
              }
              aria-label={`View profile for ${member.name}, ${member.role}`}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center py-4">
                <img
                  src={member.pic}
                  className="member-avatar"
                  alt={member.name}
                />
                <h5 className="member-name">{member.name}</h5>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfMembers;
