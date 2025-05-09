import { Search, FileCheck, Layers, Zap, CheckCircle, ShieldCheck, type LucideIcon } from "lucide-react"

type IconName = "Search" | "FileCheck" | "Layers" | "Zap" | "CheckCircle" | "ShieldCheck"

const iconMap: Record<IconName, LucideIcon> = {
    Search,
    FileCheck,
    Layers,
    Zap,
    CheckCircle,
    ShieldCheck,
}

export function getIconByName(name: string): LucideIcon {
    return iconMap[name as IconName] || CheckCircle
}
