export const shortAddress = (address: string, charsToShow: number = 4) => {
  return `${address.slice(0, charsToShow)}...${address.slice(-charsToShow)}`;
};

export const timeAgo = (ts: number) => {
  const sec = Math.floor(Date.now() / 1000 - ts);
  if (sec < 60) return `${sec}s ago`;
  if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
  return `${Math.floor(sec / 86400)}d ago`;
};
