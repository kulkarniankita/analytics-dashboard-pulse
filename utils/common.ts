export async function slow(delay: number = 1000) {
  await new Promise((resolve) => {
    return setTimeout(resolve, delay);
  });
}

export const getCountryCode = (countryName: string): string => {
  const countryToCode: { [key: string]: string } = {
    "United States": "US",
    India: "IN",
    "United Kingdom": "GB",
    Canada: "CA",
    Australia: "AU",
    Germany: "DE",
    France: "FR",
    Japan: "JP",
    China: "CN",
    Brazil: "BR",
    "New Zealand": "NZ",
    "South Africa": "ZA",
    "South Korea": "KR",
    "North Korea": "KP",
    Netherlands: "NL",
    Sweden: "SE",
    Singapore: "SG",
    Italy: "IT",
    Spain: "ES",
    Portugal: "PT",
    "United Arab Emirates": "AE",
    "Saudi Arabia": "SA",
    Qatar: "QA",
    Kuwait: "KW",
    Bahrain: "BH",
  };
  return countryToCode[countryName] || countryName;
};

export const getDiceBearAvatar = (seed: string) => {
  return `https://api.dicebear.com/7.x/open-peeps/svg?seed=${encodeURIComponent(
    seed
  )}`;
};
