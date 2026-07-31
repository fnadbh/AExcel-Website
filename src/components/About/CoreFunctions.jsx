import "./CoreFunctions.css";
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  BrainCircuit,
  Users,
  Award,
} from "lucide-react";

const functions = [
  {
    icon: <GraduationCap size={34} />,
    title: "Teaching & Learning",
    description:
      "Support excellence in teaching practices through innovative pedagogies and evidence-informed learning.",
  },
  {
    icon: <BookOpen size={34} />,
    title: "Curriculum Development",
    description:
      "Facilitate curriculum design, review and continuous enhancement to meet future educational needs.",
  },
  {
    icon: <ClipboardCheck size={34} />,
    title: "Assessment & Quality",
    description:
      "Promote authentic assessment practices and strengthen academic quality assurance.",
  },
  {
    icon: <BrainCircuit size={34} />,
    title: "AI Literacy",
    description:
      "Build awareness and capability for ethical and responsible use of Artificial Intelligence.",
  },
  {
    icon: <Users size={34} />,
    title: "Professional Development",
    description:
      "Provide workshops, mentoring and capability development opportunities for academic staff.",
  },
  {
    icon: <Award size={34} />,
    title: "Academic Excellence",
    description:
      "Cultivate a culture of continuous improvement across teaching, learning and educational innovation.",
  },
];

function CoreFunctions() {
  return (
    <section className="core-functions">

      <div className="core-container">

        <span className="core-label">
          WHAT WE DO
        </span>

        <h2>
          Core Functions
        </h2>

        <p className="core-intro">
          Our core functions support the University's commitment to
          academic excellence by empowering educators, enhancing
          curriculum quality and promoting continuous innovation.
        </p>

        <div className="core-grid">

          {functions.map((item, index) => (

            <div className="core-card" key={index}>

              <div className="core-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CoreFunctions;