/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      /*
       * TeamEvie Link Shortcuts
       */

      {
        source: "/discord",
        destination: "https://discord.gg/VKaNS86wEN",
        permanent: true,
      },
      {
        source: "/invite",
        destination: "https://discord.com/api/oauth2/authorize?client_id=807543126424158238&permissions=1461257808918&scope=bot%20applications.commands",
        permanent: true,
      },
      {
        source: "/bot",
        destination: "https://eviebot.rocks",
        permanent: false, // Migrating eviebot.rocks soon to this repo
      },
      {
        source: "/botgh",
        destination: "https://github.com/TeamEvie/Evie",
        permanent: false,
      },
      {
        source: "/team",
        destination: "https://github.com/EvieClient",
        permanent: false,
      },
      {
        source: "/qwdl", // Quick Windows Download Link
        destination: "https://evie.pw/api/downloads/latest?platform=win",
        permanent: false,
      },
      {
        source: "/qwml", // Quick Mac Download Link
        destination: "https://evie.pw/api/downloads/latest?platform=mac",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/EvieClient",
        permanent: false,
      },

      /*
       * Personal Link Shortcuts
       */

      {
        source: "/tristan",
        destination: "https://github.com/twisttaan",
        permanent: false, // Once https://tristancamejo.com/ is finished, this will be permanent
      },
      {
        source: "/tsmp",
        destination: "https://tristansmp.com",
        permanent: true, // Once https://tristancamejo.com/ is finished, this will be permanent
      },
    ];
  },
};

module.exports = nextConfig;
