// import React from "react";
// import { useNavigate } from "react-router";

// const Start = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-6">
//         <h1 className="text-2xl font-bold">
//           Smart<span className="text-indigo-400">Resume</span>
//         </h1>

//         <button
//           onClick={() => navigate("/login")}
//           className="rounded-lg bg-white px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-indigo-100"
//         >
//           Login / Sign Up
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6">
//         <div className="grid max-w-6xl items-center gap-12 md:grid-cols-2">

//           {/* Left */}
//           <div>
//             <p className="mb-4 font-semibold uppercase tracking-widest text-indigo-400">
//               AI-Powered Resume Analysis
//             </p>

//             <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
//               Build a Resume That
//               <span className="text-indigo-400"> Gets Noticed.</span>
//             </h2>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
//               Upload your resume and let AI analyze it, identify weaknesses,
//               suggest improvements, and help you create a resume that matches
//               your dream job.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold shadow-lg transition hover:bg-indigo-600"
//               >
//                 Analyze My Resume →
//               </button>

//               <button
//                 onClick={() => navigate("/login")}
//                 className="rounded-xl border border-slate-600 px-7 py-3.5 font-semibold transition hover:bg-white/10"
//               >
//                 Get Started
//               </button>
//             </div>

//             {/* Features */}
//             <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
//               <span>✓ AI Resume Analysis</span>
//               <span>✓ ATS Score</span>
//               <span>✓ Improvement Suggestions</span>
//             </div>
//           </div>

//           {/* Right - Resume Preview */}
//           <div className="relative">
//             <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              
//               <div className="rounded-xl bg-white p-6 text-slate-900">
//                 <div className="mb-5 border-b pb-4">
//                   <div className="h-5 w-40 rounded bg-slate-800"></div>
//                   <div className="mt-2 h-3 w-56 rounded bg-slate-300"></div>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <div className="mb-2 h-3 w-24 rounded bg-indigo-500"></div>
//                     <div className="h-2 w-full rounded bg-slate-200"></div>
//                     <div className="mt-2 h-2 w-5/6 rounded bg-slate-200"></div>
//                   </div>

//                   <div>
//                     <div className="mb-2 h-3 w-28 rounded bg-indigo-500"></div>
//                     <div className="h-2 w-full rounded bg-slate-200"></div>
//                     <div className="mt-2 h-2 w-4/5 rounded bg-slate-200"></div>
//                   </div>

//                   <div>
//                     <div className="mb-2 h-3 w-20 rounded bg-indigo-500"></div>
//                     <div className="h-2 w-full rounded bg-slate-200"></div>
//                     <div className="mt-2 h-2 w-3/4 rounded bg-slate-200"></div>
//                   </div>
//                 </div>

//                 {/* ATS Score */}
//                 <div className="mt-6 flex items-center justify-between rounded-lg bg-indigo-50 p-4">
//                   <div>
//                     <p className="text-sm text-slate-500">ATS Score</p>
//                     <p className="text-2xl font-bold text-indigo-600">87/100</p>
//                   </div>

//                   <div className="text-3xl">✓</div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Card */}
//             <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-slate-800 p-4 shadow-xl">
//               <p className="text-xs text-slate-400">AI Recommendation</p>
//               <p className="mt-1 font-semibold">Improve your Skills section</p>
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// };

// export default Start;


import React from "react";
import { useNavigate } from "react-router";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <nav className="navbar">
        <h1>
          Smart<span className="highlight">Resume</span>
        </h1>

        <button onClick={() => navigate("/login")} className="login-btn">
          Login / Sign Up
        </button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">AI-POWERED RESUME ANALYZER</p>

          <h2>
            Build a Resume That
            <span className="highlight"> Gets You Noticed.</span>
          </h2>

          <p className="description">
            Upload your resume and let AI analyze it, identify weaknesses,
            calculate your ATS score, and give you personalized suggestions
            to improve your chances of landing your dream job.
          </p>

          <button
            className="get-started"
            onClick={() => navigate("/login")}
          >
            Analyze My Resume →
          </button>

          <div className="features">
            <span>✓ ATS Score</span>
            <span>✓ AI Analysis</span>
            <span>✓ Smart Suggestions</span>
          </div>
        </div>

        <div className="resume-preview">
          <div className="resume-card">
            <h3>John Doe</h3>
            <p className="resume-role">Software Engineer</p>

            <hr />

            <h4>PROFILE</h4>
            <p>
              Passionate software engineer with experience in building
              scalable web applications.
            </p>

            <h4>SKILLS</h4>
            <div className="skills">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>JavaScript</span>
            </div>

            <div className="ats-box">
              <div>
                <small>ATS SCORE</small>
                <strong>87/100</strong>
              </div>

              <span className="check">✓</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Start;
