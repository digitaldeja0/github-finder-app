const HUB_URL = import.meta.env.VITE_GH_URL;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await fetch(`${HUB_URL}/search/users?${params}`);
  const { items } = await res.json();
  return items;
};

export const getUser = async (login) => {
  const res = await fetch(`${HUB_URL}/users/${login}`);

  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await res.json();
    return data;
  }
};

export const getUsersRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });

  const res = await fetch(`${HUB_URL}/users/${login}/repos?${params}`);
  // const res = await fetch(`${HUB_URL}/users/${login}/repos`);
  const data = await res.json();
  return data;
};
