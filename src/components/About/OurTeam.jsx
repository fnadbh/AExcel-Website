import "./OurTeam.css";

const team = [
  {
    name: "Prof. Dr. Ahmad Zulfaa Mohamed Kassim",
    role: "Director",
    email: "zulfaa@icats.edu.my",
    image: "/images/team/director.png",
  },
  {
    name: "Dr Natasha Amira Hushairi",
    role: "Head of Unit (Professional Development)",
    email: "natasha@icats.edu.my",
    image: "/images/team/hod.jpeg",
  },
  {
    name: "Pn Nur Hazwani Mostapha",
    role: "Executive Officer",
    email: "hazwani.m@icats.edu.my",
    image: "/images/team/executive.jpg",
  },
  {
    name: "Fitri Nur Adibah",
    role: "Intern (Web & Software Development)",
    email: "gets_fitri@icats.edu.my",
    image: "/images/team/executive2.jpg",
  },
];

function OurTeam() {
  return (
    <section className="our-team">

      <div className="team-container">

        <span className="team-label">
          OUR TEAM
        </span>

        <h2>
          Meet the People Behind ÆXcel
        </h2>

        <p className="team-intro">
          Our dedicated team works collaboratively to support teaching
          excellence, academic innovation and continuous quality
          enhancement across i-CATS University College.
        </p>

        <div className="team-grid">

          {team.map((member, index) => (

            <div className="team-card" key={index}>

              <div className="team-image">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <h3>{member.name}</h3>

              <p className="team-role">
                {member.role}
              </p>

              <p className="team-email">
                {member.email}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default OurTeam;