"use client";

export default function About() {
  const stats = [
    { number: "30+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "25+", label: "Technologies Used" },
    { number: "100%", label: "Passion & Commitment" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Text + Image Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center ">
          {/* Left: About Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm <strong>Darren Flores</strong>, I am a Senior Software
                developer I'm a Senior Software Engineer with 10+ years of
                experience in full-stack development, cloud computing, and life
                sciences, specializing in genomics and AWS. At Biogen, I
                migrated 500TB of genomic data to AWS S3, built a React-based
                web app, and automated bioinformatics workflows with GitHub
                Actions. Previously, at UCSC Genomics Institute, I worked on
                large-scale projects like Dockstore and HuBMAP, handling massive
                omics datasets.
              </p>
              <p>
                I’m passionate about learning new technologies, solving complex
                problems, and delivering scalable solutions that advance
                scientific discovery. Skilled in Terraform, AWS, React, Python,
                WDL, and CI/CD. Key skills: Problem solving, root cause
                analysis, communication, multitasking, and troubleshooting
              </p>

              {/* <p>
                  I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving tech landscape.
              </p> */}
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Image with background shape */}
          {/* <div className="relative">
            <div className="relative z-12">
              <img
                src="/surabhi.jpg"
                alt="Surabhi"
                className="w-full max-w-sm object-contain rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 dark:bg-blue-700 rounded-2xl -z-10"></div>
          </div> */}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
