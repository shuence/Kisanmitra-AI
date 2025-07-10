import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Shubham Pitekar",
    role: "Flutter & Full Stack Developer",
    description: "Expert in mobile app development with Flutter and full-stack web development. Specializes in creating seamless user experiences and robust backend systems.",
    avatar: "SP",
    github: "https://github.com/shuence",
    linkedin: "https://www.linkedin.com/in/shuence/"
  },
  {
    name: "Priyanshu Agrawal",
    role: "AI Agentic AI Developer",
    description: "AI specialist focused on developing intelligent agentic systems. Expert in Google Cloud AI/ML services and creating conversational AI solutions.",
    avatar: "PA",
    github: "",
    linkedin: "https://www.linkedin.com/in/thisispriyanshu/"
  },
  {
    name: "Sanika Chavan",
    role: "AI Engineer",
    description: "Machine Learning engineer with expertise in computer vision and natural language processing. Passionate about applying AI to solve real-world agricultural challenges.",
    avatar: "SC",
    github: "https://github.com/sanika391",
    linkedin: "https://www.linkedin.com/in/sanikachavan/"
  }
];

const Team = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team of developers and AI engineers dedicated to empowering farmers through technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
              </div>
              
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.github}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={member.linkedin}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🏆 Team Achievements
            </h3>
            <div className="grid md:grid-cols-1 gap-6 text-center justify-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">🥉</div>
                <p className="text-sm text-muted-foreground">Google Solution Challenge 2024<br/>Global Top 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
