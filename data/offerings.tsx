import {
    Database,
    BarChart3,
    Sun,
    Users,
    Network,
    Server,
    Cpu,
    Wifi,
    LineChart,
    Gauge,
    CloudSun,
    Shield,
    Zap,
    Battery,
    Layers,
    FileText,
    Lightbulb,
    ClipboardList,
} from "lucide-react"

export const offerings = [
    {
        title: "Advanced Communications",
        icon: <Database className="h-5 w-5" />,
        description: "Seamless connectivity solutions for optimal data transmission and system integration",
        image: "/business.webp",
        items: [
            {
                title: "Architecture Network & VLAN Design",
                description: "Custom architectures for solar plants",
                icon: <Network className="h-5 w-5" />,
            },
            {
                title: "System Integration",
                description: "Seamless connection between heterogeneous components",
                icon: <Server className="h-5 w-5" />,
            },
            {
                title: "Specialized Fiber Optic Fusion",
                description: "High-speed, low-loss connections",
                icon: <Cpu className="h-5 w-5" />,
            },
            {
                title: "Wireless Communication Systems",
                description: "Reliable data transmission for remote monitoring",
                icon: <Wifi className="h-5 w-5" />,
            },
        ],
    },
    {
        title: "Control & Monitoring",
        icon: <BarChart3 className="h-5 w-5" />,
        description: "Comprehensive monitoring and control systems for maximum operational efficiency",
        image: "/monitoring.jpg",
        items: [
            {
                title: "Integrated SCADA Development",
                description: "Centralized control systems",
                icon: <LineChart className="h-5 w-5" />,
            },
            {
                title: "Custom Control Logic",
                description: "Optimized algorithms for each plant alongside PPC",
                icon: <Gauge className="h-5 w-5" />,
            },
            {
                title: "Weather Stations Supply",
                description: "Precise monitoring of environmental conditions",
                icon: <CloudSun className="h-5 w-5" />,
            },
            {
                title: "Cybersecurity Protocols",
                description: "Advanced protection for critical infrastructure",
                icon: <Shield className="h-5 w-5" />,
            },
        ],
    },
    {
        title: "Energy Technologies",
        icon: <Sun className="h-5 w-5" />,
        description: "Cutting-edge renewable energy solutions for sustainable power generation",
        image: "/tech.jpg",
        items: [
            {
                title: "Solar Photovoltaics",
                description: "Optimization of solar plants of any scale",
                icon: <Sun className="h-5 w-5" />,
            },
            {
                title: "BESS Systems",
                description: "Energy storage through advanced batteries",
                icon: <Battery className="h-5 w-5" />,
            },
            {
                title: "Hybrid Solutions",
                description: "Integration of multiple energy sources",
                icon: <Zap className="h-5 w-5" />,
            },
            {
                title: "Microgrid Development",
                description: "Self-contained energy systems for reliability",
                icon: <Layers className="h-5 w-5" />,
            },
        ],
    },
    {
        title: "Professional Services",
        icon: <Users className="h-5 w-5" />,
        description: "Expert consulting and project management for renewable energy initiatives",
        image: "/prof.webp",
        items: [
            {
                title: "EPC Contracting",
                description: "Comprehensive management of energy projects",
                icon: <FileText className="h-5 w-5" />,
            },
            {
                title: "Specialized Consulting",
                description: "High-level technical advice",
                icon: <Lightbulb className="h-5 w-5" />,
            },
            {
                title: "Project Management",
                description: "Efficient coordination of complex projects",
                icon: <ClipboardList className="h-5 w-5" />,
            },
            {
                title: "Training & Knowledge Transfer",
                description: "Building internal capabilities for your team",
                icon: <Users className="h-5 w-5" />,
            },
        ],
    },
]
