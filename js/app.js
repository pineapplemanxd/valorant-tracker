async function getPlayerStats() {
  const usernameTag = document.getElementById('usernameTag').value;
  const [username, tag] = usernameTag.split('#');
  const API_KEY = 'HDEV-22e52e9e-90d4-4246-b795-46b4f10589b4';
  const API_URL = `https://api.henrikdev.xyz/valorant/v2/account/${username}/${tag}?api_key=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.status === 200) {
      document.getElementById('result').innerHTML = `
        <p>Player: ${data.data.name}#${data.data.tag}</p>
        <p>Region: ${data.data.region}</p>
        <p>Account Level: ${data.data.account_level}</p>
        <p>puuid: ${data.data.puuid}</p>
      `;
      document.getElementById('lastupdate').innerHTML = `
        <p>Last Updated: ${data.data.updated_at}</p>
      `;
      // Call the new function to get stored matches by PUUID

      // Call the getPlayerRank function to fetch and display the rank
      getPlayerRank(username, tag, 'eu', 'pc'); // Adjust the region and platform as needed
    } else {
      document.getElementById('result').innerHTML = '<p>Player not found or API error.</p>';
    }
  } catch (error) {
    document.getElementById('result').innerHTML = `<p>Error fetching player stats: ${error.message}</p>`;
    console.error('Error fetching player stats:', error);
  }
}
async function getPlayerRank(username, tag, region, platform) {
  const API_KEY = 'HDEV-22e52e9e-90d4-4246-b795-46b4f10589b4';
  const API_URL = `https://api.henrikdev.xyz/valorant/v3/mmr/${region}/${platform}/${username}/${tag}?api_key=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Player not found. Please check the username and tag.');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();

    if (data.status === 200) {
      document.getElementById('result2').innerHTML = `
        <p>Player: ${data.data.account.name}#${data.data.account.tag}</p>
        <p>Region: ${region}</p>
        <p>Last Change: ${data.data.current.last_change}</p>
        <p>ELO: ${data.data.current.elo}</p>

      `;
      document.getElementById('rank').innerHTML = `

        <p>Current Rank: ${data.data.current.tier.name}</p>
        <p>Peak Rank: ${data.data.peak.tier.name}</p>
      `;
    } else {
      document.getElementById('result2').innerHTML = '<p>Player not found or API error.</p>';
    }
  } catch (error) {
    document.getElementById('result2').innerHTML = `<p>Error fetching player rank: ${error.message}</p>`;
    console.error('Error fetching player rank:', error);
  }
}

async function getPlayerMatch() {
  const username = document.getElementById('username').value;
  const tag = document.getElementById('tag').value;
  const API_KEY = 'HDEV-22e52e9e-90d4-4246-b795-46b4f10589b4';
  const API_URL = `ttps://api.henrikdev.xyz/valorant/v1/stored-matches/${region}/${username}/${tag}?api_key=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.status === 200) {
      document.getElementById('result3').innerHTML = `
        <p>Match ID: ${item.meta.id}</p>
          <p>Map: ${item.meta.map.name}</p>
          <p>Mode: ${item.meta.mode}</p>
          <p>Started At: ${new Date(item.meta.started_at).toLocaleString()}</p>
          <p>Season: ${item.meta.season.short}</p>
          <p>Region: ${item.meta.region}</p>
          <p>Cluster: ${item.meta.cluster}</p>
          <p>Headshots: ${item.stats.shots.head}</p>
          <p>Body Shots: ${item.stats.shots.body}</p>
          <p>Leg Shots: ${item.stats.shots.leg}</p>
          <p>Damage Dealt: ${item.stats.damage.dealt}</p>
          <p>Damage Received: ${item.stats.damage.received}</p>
      `;
      document.getElementById('lastupdate').innerHTML = `
        <p>Last Updated: ${data.data.updated_at}</p>
      `;
      // Call the new function to get stored matches by PUUID

    } else {
      document.getElementById('result3').innerHTML = '<p>Player not found or API error.</p>';
    }
  } catch (error) {
    document.getElementById('result3').innerHTML = `<p>Error fetching player stats: ${error.message}</p>`;
    console.error('Error fetching player stats:', error);
  }
}
