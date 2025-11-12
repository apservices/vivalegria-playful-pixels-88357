// Dynamic Pricing Calculator for Vivalegria
// Based on "Pacotes e Ofertas Vivalegria 2025"

export type ChildrenRange = 15 | 20 | 30 | 40 | 50;
export type PackageType = "select" | "classic";
export type WorkshopType = 
  | "pintura_basica" 
  | "pintura_pro" 
  | "slime" 
  | "micangas" 
  | "jardinagem" 
  | "tela" 
  | "cupcake" 
  | "baladinha" 
  | "magicas"
  | "baby"
  | "torta";

// Package Base Prices (Updated 2025)
const packagePrices: Record<PackageType, Record<ChildrenRange, number>> = {
  classic: {
    15: 850,
    20: 950,
    30: 1100,
    40: 1250,
    50: 1400,
  },
  select: {
    15: 1100,
    20: 1250,
    30: 1400,
    40: 1550,
    50: 1700,
  },
};

// Workshop Prices (Updated 2025)
const workshopPrices: Record<WorkshopType, Record<ChildrenRange, number>> = {
  slime: { 15: 350, 20: 400, 30: 500, 40: 650, 50: 750 },
  micangas: { 15: 300, 20: 350, 30: 450, 40: 550, 50: 650 },
  cupcake: { 15: 400, 20: 450, 30: 550, 40: 650, 50: 750 },
  tela: { 15: 350, 20: 400, 30: 500, 40: 600, 50: 700 },
  jardinagem: { 15: 300, 20: 350, 30: 450, 40: 550, 50: 650 },
  pintura_basica: { 15: 350, 20: 400, 30: 500, 40: 600, 50: 700 },
  pintura_pro: { 15: 350, 20: 400, 30: 500, 40: 600, 50: 700 },
  baladinha: { 15: 989, 20: 1099, 30: 1199, 40: 1299, 50: 1399 },
  magicas: { 15: 900, 20: 950, 30: 1000, 40: 1050, 50: 1100 },
  baby: { 15: 300, 20: 340, 30: 380, 40: 420, 50: 460 },
  torta: { 15: 180, 20: 200, 30: 220, 40: 240, 50: 260 },
};

export const calculatePackagePrice = (
  packageType: PackageType,
  numChildren: ChildrenRange
): number => {
  return packagePrices[packageType][numChildren];
};

export const calculateWorkshopPrice = (
  workshopType: WorkshopType,
  numChildren: ChildrenRange
): number => {
  return workshopPrices[workshopType][numChildren];
};

export const getMinimumPrice = (type: "package" | "workshop", name: string): number => {
  if (type === "package") {
    return packagePrices[name as PackageType][15];
  }
  return workshopPrices[name as WorkshopType][15];
};

export const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(".", ",");
};

export const childrenRanges: { label: string; value: ChildrenRange }[] = [
  { label: "Até 15 crianças", value: 15 },
  { label: "16-20 crianças", value: 20 },
  { label: "21-30 crianças", value: 30 },
  { label: "31-40 crianças", value: 40 },
  { label: "41-50 crianças", value: 50 },
];
