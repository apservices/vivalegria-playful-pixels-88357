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

// Package Base Prices
const packagePrices: Record<PackageType, Record<ChildrenRange, number>> = {
  select: {
    15: 789.90,
    20: 999.90,
    30: 1299.90,
    40: 1599.90,
    50: 1839.90,
  },
  classic: {
    15: 589.90,
    20: 749.90,
    30: 1099.90,
    40: 1399.90,
    50: 1639.90,
  },
};

// Workshop Prices
const workshopPrices: Record<WorkshopType, Record<ChildrenRange, number>> = {
  pintura_basica: { 15: 149.90, 20: 189.90, 30: 229.90, 40: 269.90, 50: 309.90 },
  pintura_pro: { 15: 249.90, 20: 289.90, 30: 329.90, 40: 369.90, 50: 409.90 },
  slime: { 15: 250.00, 20: 280.00, 30: 310.00, 40: 340.00, 50: 370.00 },
  micangas: { 15: 250.00, 20: 280.00, 30: 310.00, 40: 340.00, 50: 370.00 },
  jardinagem: { 15: 250.00, 20: 280.00, 30: 310.00, 40: 340.00, 50: 370.00 },
  tela: { 15: 330.00, 20: 360.00, 30: 390.00, 40: 420.00, 50: 450.00 },
  cupcake: { 15: 330.00, 20: 360.00, 30: 390.00, 40: 420.00, 50: 450.00 },
  baladinha: { 15: 989.00, 20: 1099.00, 30: 1199.00, 40: 1299.00, 50: 1399.00 },
  magicas: { 15: 900.00, 20: 950.00, 30: 1000.00, 40: 1050.00, 50: 1100.00 },
  baby: { 15: 300.00, 20: 340.00, 30: 380.00, 40: 420.00, 50: 460.00 },
  torta: { 15: 180.00, 20: 200.00, 30: 220.00, 40: 240.00, 50: 260.00 },
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
