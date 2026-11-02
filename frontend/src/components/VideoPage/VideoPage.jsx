// import React, { useState } from "react";

// /*
//   videopage.jsx
//   ------------------------------------------------------------
//   a responsive page that displays four playable youtube videos.

//   how to use:
//   1. replace the `url` values below with your own youtube links.
//      any of these formats work:
//        - https://www.youtube.com/watch?v=VIDEO_ID
//        - https://youtu.be/VIDEO_ID
//        - https://www.youtube.com/embed/VIDEO_ID
//        - https://www.youtube.com/shorts/VIDEO_ID
//   2. import and render <VideoPage /> anywhere in your app.

//   each card shows the youtube thumbnail first and only loads the
//   real player when clicked. this keeps the page fast, since four
//   full youtube iframes loading at once is heavy.
// */

// const videos = [
//   {
//     title: "AI 3D Title Sequence",
//     description: "a short description of the first video.",
//     url: "https://youtu.be/AWYsbkIkGTs?si=ZOl8fRy3_IaOduE0",
//   },
//   {
//     title: "Live Action Footage with AI VFX Composite",
//     description: "a short description of the second video.",
//     url: "https://youtu.be/hsZUtfI-iZM?si=6R8DU8baHxwtogF6",
//   },
//   {
//     title: "video three",
//     description: "a short description of the third video.",
//     url: "https://www.youtube.com/embed/VIDEO_ID_3",
//   },
//   {
//     title: "Cinematic Commercial Ads",
//     description: "COMING SOON",
//     url: "https://www.youtube.com/shorts/hello",
//   },
// ];

// // pulls the 11-character video id out of any common youtube link format
// function getYouTubeId(url) {
//   const match = url.match(
//     /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
//   );
//   return match ? match[1] : null;
// }

// function VideoCard({ title, description, url }) {
//   const [playing, setPlaying] = useState(false);
//   const id = getYouTubeId(url);

//   return (
//     <article style={styles.card}>
//       <div style={styles.frameWrap}>
//         {!id ? (
//           <div style={styles.error}>invalid youtube link</div>
//         ) : playing ? (
//           <iframe
//             style={styles.iframe}
//             src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
//             title={title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           />
//         ) : (
//           <button
//             style={styles.poster}
//             onClick={() => setPlaying(true)}
//             aria-label={`play ${title}`}
//           >
//             <img
//               src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
//               alt=""
//               style={styles.thumb}
//               loading="lazy"
//             />
//             <span style={styles.playBtn}>
//               <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </span>
//           </button>
//         )}
//       </div>
//       <div style={styles.meta}>
//         <h2 style={styles.title}>{title}</h2>
//         <p style={styles.desc}>{description}</p>
//       </div>
//     </article>
//   );
// }

// export default function VideoPage() {
//   return (
//     <main style={styles.page}>
//       <header style={styles.header}>
//         <h1 style={styles.heading}>videos</h1>
//         <p style={styles.sub}>click any video to play.</p>
//       </header>

//       <section style={styles.grid}>
//         {videos.map((v, i) => (
//           <VideoCard key={i} {...v} />
//         ))}
//       </section>
//     </main>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "#0b0b0d",
//     color: "#f2f2f2",
//     fontFamily: "Inter, system-ui, -apple-system, sans-serif",
//     padding: "48px 24px",
//     boxSizing: "border-box",
//   },
//   header: {
//     maxWidth: 1200,
//     margin: "0 auto 32px",
//   },
//   heading: {
//     fontSize: "clamp(28px, 4vw, 44px)",
//     fontWeight: 700,
//     letterSpacing: "-0.02em",
//     margin: 0,
//   },
//   sub: {
//     color: "#9a9aa3",
//     marginTop: 8,
//   },
//   grid: {
//     maxWidth: 1200,
//     margin: "0 auto",
//     display: "grid",
//     // two columns on wide screens, one column on phones
//     gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
//     gap: 24,
//   },
//   card: {
//     background: "#151519",
//     borderRadius: 14,
//     overflow: "hidden",
//     border: "1px solid #24242b",
//   },
//   frameWrap: {
//     position: "relative",
//     width: "100%",
//     aspectRatio: "16 / 9",
//     background: "#000",
//   },
//   iframe: {
//     position: "absolute",
//     inset: 0,
//     width: "100%",
//     height: "100%",
//   },
//   poster: {
//     position: "absolute",
//     inset: 0,
//     width: "100%",
//     height: "100%",
//     padding: 0,
//     border: "none",
//     cursor: "pointer",
//     background: "#000",
//   },
//   thumb: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//     opacity: 0.85,
//   },
//   playBtn: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 68,
//     height: 48,
//     borderRadius: 12,
//     background: "rgba(255, 0, 0, 0.9)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   error: {
//     position: "absolute",
//     inset: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#ff6b6b",
//   },
//   meta: {
//     padding: "16px 18px 20px",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 600,
//     margin: 0,
//   },
//   desc: {
//     fontSize: 14,
//     color: "#9a9aa3",
//     margin: "6px 0 0",
//     lineHeight: 1.5,
//   },
// };

import React, { useState } from "react";

/*
  videopage.jsx
  ------------------------------------------------------------
  a responsive page that displays four playable youtube videos.

  how to use:
  1. replace the `url` values below with your own youtube links.
     any of these formats work:
       - https://www.youtube.com/watch?v=VIDEO_ID
       - https://youtu.be/VIDEO_ID
       - https://www.youtube.com/embed/VIDEO_ID
       - https://www.youtube.com/shorts/VIDEO_ID
  2. import and render <VideoPage /> anywhere in your app.

  each card shows the youtube thumbnail first and only loads the
  real player when clicked. this keeps the page fast, since four
  full youtube iframes loading at once is heavy.
*/

const videos = [
  {
    title: "AI 3D Title Sequences",
    description: "Title Sequence for Werewolf In New York Series.",
    url: "https://youtu.be/AWYsbkIkGTs?si=ZOl8fRy3_IaOduE0",
  },
  {
    title: "Live Action Footage with AI VFX Composite",
    description: "Episode 2 Of Werewolf In New York.",
    url: "https://youtu.be/hsZUtfI-iZM?si=6R8DU8baHxwtogF6",
  },
  {
    title: "Short Live Action Films (Sci-Fi, Fantasy, Action)",
    description: "An extraordinary being must guide a young man to finish his art—because the fate of the world may depend on it.",
    url: "https://youtu.be/V722KkfKw8w?si=YfvrYqCCnJkyOckD",
  },
  {
    title: "Cinematic Commercial Ads",
    description: "a short description of the fourth video.",
    // set comingSoon to false and add a url once this video is released
    comingSoon: true,
    url: "",
  },
];

// pulls the 11-character video id out of any common youtube link format
function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function VideoCard({ title, description, url, comingSoon }) {
  const [playing, setPlaying] = useState(false);
  const id = comingSoon ? null : getYouTubeId(url);

  return (
    <article style={styles.card}>
      <div style={styles.frameWrap}>
        {comingSoon ? (
          <div style={styles.comingSoon}>
            <span style={styles.comingSoonText}>coming soon</span>
          </div>
        ) : !id ? (
          <div style={styles.error}>invalid youtube link</div>
        ) : playing ? (
          <iframe
            style={styles.iframe}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            style={styles.poster}
            onClick={() => setPlaying(true)}
            aria-label={`play ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              style={styles.thumb}
              loading="lazy"
            />
            <span style={styles.playBtn}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div style={styles.meta}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.desc}>{description}</p>
      </div>
    </article>
  );
}

export default function VideoPage() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        {/* <h1 style={styles.heading}>Video Services</h1> */}
        <h1 style={styles.sub}>Click any video to play.</h1>
      </header>

      <section style={styles.grid}>
        {videos.map((v, i) => (
          <VideoCard key={i} {...v} />
        ))}
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0d",
    color: "#f2f2f2",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    padding: "48px 24px",
    boxSizing: "border-box",
  },
  header: {
    maxWidth: 1200,
    margin: "0 auto 32px",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  sub: {
    color: "#9a9aa3",
    marginTop: 8,
    textTransform: "uppercase"
  },
  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    // two columns on wide screens, one column on phones
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
    gap: 24,
  },
  card: {
    background: "#151519",
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid #24242b",
  },
  frameWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    background: "#000",
  },
  iframe: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },
  poster: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    padding: 0,
    border: "none",
    cursor: "pointer",
    background: "#000",
  },
  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    opacity: 0.85,
  },
  playBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 68,
    height: 48,
    borderRadius: 12,
    background: "rgba(255, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  comingSoon: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a1a20 0%, #0b0b0d 100%)",
  },
  comingSoonText: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#f2f2f2",
    opacity: 0.85,
  },
  error: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ff6b6b",
  },
  meta: {
    padding: "16px 18px 20px",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    margin: 0,
  },
  desc: {
    fontSize: 14,
    color: "#9a9aa3",
    margin: "6px 0 0",
    lineHeight: 1.5,
  },
};
