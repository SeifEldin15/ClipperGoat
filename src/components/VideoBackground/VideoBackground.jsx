import React from 'react';
import './VideoBackground.css'; // Ensure to create and import your CSS file

const VideoBackground = () => {
  return (
    <div className="sparkle-bg">
      <div
        className="bg-video w-background-video w-background-video-atom"
        data-poster-url="https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-poster-00001.jpg"
        data-video-urls="https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-transcode.mp4,https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
      >
        <video
          id="b9adad5d-4ef3-950f-14ab-597e6b7e78a0-video"
          autoplay
          loop
          muted
          playsInline
          style={{ backgroundImage: 'url("https://web.archive.org/web/20240227224958im_/https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-poster-00001.jpg")' }}
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source src="https://web.archive.org/web/20240227224958im_/https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-transcode.mp4" data-wf-ignore="true" />
          <source src="https://web.archive.org/web/20240227224958im_/https://assets-global.website-files.com/6584ac9d70dd76e2a79298ca/658c6fb6d47962c520dbac9c_particles_-_323 (720p)-transcode.webm" data-wf-ignore="true" />
        </video>
      </div>
      <div className="noise-texture-bg"></div>
    </div>
  );
};

export default VideoBackground;
