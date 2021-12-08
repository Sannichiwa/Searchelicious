// play the youtube embed-video
export const playTube = (videoURL, youtubeFrame) => {
	// create and start the youtube-video by adding a frame to it and video-URL
	function onYouTubeIframeAPIReady() {
		// this regExp-variable contains every string that is about to be removed with the .match()-method
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

		// this .match()-method will remove strings like 'youtu.be', 'embed\' and 'watch' from the YouTube-URL inserted by the user
		const match = videoURL.match(regExp);

		// if the videoID is 11 characters long, then use these 11 characters, else return null
		let videoId = match && match[2].length === 11 ? match[2] : null;

		// this will create a YouTube player with some options
		const player = new YT.Player(youtubeFrame, {
			// player = new YT.Player('youtubePlayer', {
			videoId: videoId, // YouTube Video ID
			width: '100%', // Player width (in px)
			height: '100%', // Player height (in px)
			playerVars: {
				autoplay: 0, // Auto-play the video on load
				controls: 1, // Show pause/play buttons in player
				showinfo: 0, // Hide the video title
				modestbranding: 1, // Hide the Youtube Logo
				loop: 1, // Run the video in a loop
				fs: 0, // Hide the full screen button
				cc_load_policy: 0, // Hide closed captions
				iv_load_policy: 3, // Hide the Video Annotations
				autohide: 0 // Hide video controls when playing
			},
			events: {
				onReady: function (e) {
					// e.target.mute(); // mute/unmute
				}
			}
		});
	}

	// start the newly created YouTube-player
	onYouTubeIframeAPIReady();
};
