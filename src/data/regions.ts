export interface Region {
  name: string;
  location: string;
  geography: "Americas" | "Europe" | "Asia Pacific" | "Middle East & Africa";
  status: "GA" | "Preview" | "Coming Soon";
  services: string[];
}

export const regions: Region[] = [
  {
    name: "East US",
    location: "Virginia, USA",
    geography: "Americas",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud", "MySQL HeatWave"],
  },
  {
    name: "West US",
    location: "California, USA",
    geography: "Americas",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Central US",
    location: "Iowa, USA",
    geography: "Americas",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Canada Central",
    location: "Toronto, Canada",
    geography: "Americas",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Brazil South",
    location: "São Paulo, Brazil",
    geography: "Americas",
    status: "Preview",
    services: ["Autonomous Database"],
  },
  {
    name: "UK South",
    location: "London, UK",
    geography: "Europe",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud", "MySQL HeatWave"],
  },
  {
    name: "Germany West Central",
    location: "Frankfurt, Germany",
    geography: "Europe",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "France Central",
    location: "Paris, France",
    geography: "Europe",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Italy North",
    location: "Milan, Italy",
    geography: "Europe",
    status: "Preview",
    services: ["Autonomous Database"],
  },
  {
    name: "Southeast Asia",
    location: "Singapore",
    geography: "Asia Pacific",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Japan East",
    location: "Tokyo, Japan",
    geography: "Asia Pacific",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "Australia East",
    location: "Sydney, Australia",
    geography: "Asia Pacific",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "India Central",
    location: "Pune, India",
    geography: "Asia Pacific",
    status: "GA",
    services: ["Autonomous Database", "Exadata Cloud"],
  },
  {
    name: "UAE North",
    location: "Dubai, UAE",
    geography: "Middle East & Africa",
    status: "Preview",
    services: ["Autonomous Database"],
  },
];

export const geographies = ["Americas", "Europe", "Asia Pacific", "Middle East & Africa"];
