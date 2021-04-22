export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://shreyam1008.github.io/spotty/";
const clientId = "c4393b0f3956473480dd0371a6f2e5de";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      console.log(initial);

      return initial;
    }, {});
};

// http://localhost:3000/#access_token=BQDotx3mRjirhK1bIiiSfIEstMr-W974PTi-ulZlP1n5CRysSI2MeJzKADN1msKF1GZvv7yBNalnsm7RVCY_I_nnQ5Q4kP82Du9pW7xGQ05gaUneDYbvFMuJNe4A-wjtIqKyThZozbzpBm__SjdATDX1sd9V0FzEHcr53eIuRJb5CWhx&token_type=Bearer
// &expires_in=3600

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
