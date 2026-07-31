import "./StrategicFramework.css";
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  BrainCircuit,
  Users,
  BadgeCheck,
} from "lucide-react";

const framework = [
  {
    icon: <GraduationCap size={38} />,
    title: "Teaching Excellence",
    description:
      "Strengthening innovative teaching practices that inspire meaningful learning experiences.",
  },
  {
    icon: <BookOpen size={38} />,
    title: "Curriculum Innovation",
    description:
      "Designing and enhancing future-ready curricula aligned with academic and industry needs.",
  },
  {
    icon: <ClipboardCheck size={38} />,
    title: "Assessment Excellence",
    description:
      "Promoting authentic, evidence-informed assessment that supports student success.",
  },
  {
    icon: <BrainCircuit size={38} />,
    title: "AI Literacy",
    description:
      "Encouraging ethical and responsible integration of Artificial Intelligence in higher education.",
  },
  {
    icon: <Users size={38} />,
    title: "Professional Development",
    description:
      "Empowering educators through continuous capability development and lifelong learning.",
  },
  {
    icon: <BadgeCheck size={38} />,
    title: "Quality Enhancement",
    description:
      "Embedding a culture of continuous quality improvement across teaching and learning.",
  },
];

function StrategicFramework() {
  return (
    <section className="framework">

      <div className="framework-container">

        <span className="framework-label">
          OUR FRAMEWORK
        </span>

        <h2>
          Strategic Framework
        </h2>

        <p className="framework-intro">
          Our strategic framework serves as the foundation for every
          initiative undertaken by ÆXcel to cultivate academic
          excellence and continuous improvement.
        </p>

        <div className="framework-grid">

          {framework.map((item, index) => (

            <div className="framework-card" key={index}>

              <div className="framework-icon">

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

export default StrategicFramework;