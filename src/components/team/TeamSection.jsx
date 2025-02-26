'use client'
import Link from "next/link";
import { teamData } from "../../data/data";
import DivAnimateY from "../utils/DivAnimateY";

const TeamSection = () => {
  return (
    <section className="overflow-hidden team_area section-padding">
      <DivAnimateY className="container">
        <div className="text-center section-title">
          <h2>Meet our Instructors</h2>
          <p>
            We offer a brand new approach to the most basic learning paradigms.
            Choose from a wide range of learning options and gain new skills!
            Our school is know.
          </p>
        </div>
        <div className="row g-4">
          {teamData.map((item) => (
            <div className="col-lg-3 col-sm-6 col-xs-12" key={item.id}>
              <div className="our-team">
                <div className="team-content">
                  <Link href={`/instructor/${item.slug}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                  <ul className="social-links">
                    {item.socials.map((social, index) => (
                      <li key={index}>
                        <Link
                          href={social.url || '#'} // Added fallback URL
                          className={social.socialMedia}
                        >
                          <span className="sr-only">{social.socialMedia}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="team-prof">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
                <div className="sth_det2">
                  <span className="ti-file">
                    {" "}
                    <u>
                      {item.course < 10 ? `0${item.course}` : item.course}{" "}
                      Course
                    </u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>{item.students} Student</u>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default TeamSection;