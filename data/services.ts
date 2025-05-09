import { ServiceType } from "@/components/organisms/services/grid";
import { WifiIcon, BarChart3, Package, Settings, Code, Cable, FileText, Lightbulb, ClipboardCheck, Sun, Battery, ShieldCheck, Network } from "lucide-react";

export const allServices: ServiceType[] = [
  {
    id: 1,
    title: "Communication Fault Diagnosis & Solution",
    description: "Rapid identification and resolution of communication issues",
    longDescription:
      "Our diagnostic tools quickly identify and resolve communication faults in your solar plant infrastructure. We use real-time monitoring to detect anomalies in data transmission and network connectivity, implementing targeted solutions to minimize downtime and ensure continuous operation.",
    icon: WifiIcon,
    highlighted: false,
    category: "infrastructure",
  },
  {
    id: 2,
    title: "Network Architecture & VLAN Design",
    description: "Custom networks with advanced security measures",
    longDescription:
      "We design robust network architectures specifically for renewable energy systems with segmented VLANs that enhance both performance and security. Our implementations include industry-leading security protocols with redundancy and failover capabilities to ensure continuous operation.",
    icon: Network,
    highlighted: false,
    category: "infrastructure",
  },
  {
    id: 3,
    title: "Integrated SCADA Development",
    description: "Centralized control systems for multiple components",
    longDescription:
      "Our SCADA systems provide comprehensive monitoring and control through customized dashboards displaying real-time metrics. These solutions integrate seamlessly with various hardware components, featuring predictive maintenance alerts and performance optimization algorithms. With our SCADA development, you gain complete visibility and control over your entire renewable energy infrastructure, enabling data-driven decisions that optimize performance and reduce operational costs.",
    icon: BarChart3,
    highlighted: true,
    category: "software",
  },
  {
    id: 4,
    title: "Equipment Supply & Installation",
    description: "Hardware provision for optimal plant performance",
    longDescription:
      "We source and install high-quality hardware components from trusted manufacturers, including robust combiner communication boxes, industrial-grade switches, and precision weather stations. Our certified technicians follow industry best practices to ensure optimal setup, thorough testing, and full commissioning before handover—guaranteeing long-term performance and reliability.",
    icon: Package,
    highlighted: false,
    category: "infrastructure",
  },
  {
    id: 5,
    title: "System Commissioning",
    description: "Configuration and activation of all technical systems",
    longDescription:
      "Our commissioning process ensures all systems are properly configured, tested, and optimized before going live. We perform systematic verification under various operating conditions, providing detailed documentation and handover training for your staff.",
    icon: Settings,
    highlighted: false,
    category: "management",
  },
  {
    id: 6,
    title: "Control Logic & Software Development",
    description: "Custom algorithms for optimized energy production",
    longDescription:
      "We develop advanced control algorithms designed to maximize energy output while ensuring full compliance with national grid codes. Our logic systems are purpose-built to meet regulatory requirements, enabling fast and successful clearance of hold points, minimizing delays, and preventing compliance-related penalties. The software also integrates predictive analytics and automated responses based on real-time environmental conditions. ",
    icon: Code,
    highlighted: false,
    category: "software",
  },
  {
    id: 7,
    title: "Fiber Optic Fusion",
    description: "Specialized high-speed, low-loss connections",
    longDescription:
      "Our dedicated fiber optics division provides ultra-reliable, high-speed data connections across your energy infrastructure. We deliver precision fusion splicing services that ensure permanent, low-loss connections between fiber optic cables. Redundant paths are implemented for critical systems to eliminate single points of failure and guarantee continuous communication performance under demanding conditions. ",
    icon: Cable,
    highlighted: false,
    category: "infrastructure",
  },
  {
    id: 8,
    title: "Documentation & Project Management",
    description: "Comprehensive coordination of complex projects",
    longDescription:
      "Our project management division provides end-to-end support across all stages of your renewable energy project to ensure timely delivery, technical compliance, and full alignment with project requirements. We conduct detailed analysis of deliverables and milestones, and provide comprehensive documentation—including system diagrams, equipment specifications, and maintenance procedures—along with regular status reporting to all stakeholders. ",
    icon: FileText,
    highlighted: false,
    category: "management",
  },
  {
    id: 9,
    title: "Development & Consulting",
    description: "Expert advice and custom development services",
    longDescription:
      "Our consulting services provide expert guidance on system design, technology selection, and implementation strategies. We conduct thorough assessments of your infrastructure and develop tailored recommendations based on emerging trends and innovations.",
    icon: Lightbulb,
    highlighted: false,
    category: "software",
  },
  {
    id: 10,
    title: "EPC Contracting and Audit",
    description: "Complete project planning, execution and verification",
    longDescription:
      "As an EPC contractor, we manage all aspects of your project from initial design through final implementation. Our team handles engineering, procurement, and construction with comprehensive audit services to verify system performance and compliance.",
    icon: ClipboardCheck,
    highlighted: false,
    category: "management",
  },
  {
    id: 11,
    title: "Solar Photovoltaics",
    description: "Advanced solar power generation systems",
    longDescription:
      "We design and implement state-of-the-art solar photovoltaic systems optimized for maximum energy production. Our solutions incorporate the latest technologies with comprehensive monitoring systems that track performance metrics and identify maintenance needs.",
    icon: Sun,
    highlighted: false,
    category: "energy",
  },
  {
    id: 12,
    title: "Battery Energy Storage Systems (BESS)",
    description: "Advanced energy storage solutions",
    longDescription:
      "Our battery energy storage systems provide reliable power management capabilities that enhance your renewable energy assets. We design custom BESS solutions with advanced battery management technology and sophisticated control systems for various applications.",
    icon: Battery,
    highlighted: false,
    category: "energy",
  },
  {
    id: 13,
    title: "Cybersecurity & OT/IT Segmentation",
    description: "Protection of critical systems with industrial-grade security",
    longDescription:
      "We implement advanced cybersecurity solutions tailored to renewable energy infrastructures. Our services include OT/IT network segmentation, deployment of industrial firewalls, system hardening, and intrusion detection/prevention systems (IDS/IPS). We conduct comprehensive risk assessments and ensure compliance with AS/NZS and IEC 62443 standards to safeguard your critical assets.",
    icon: ShieldCheck,
    highlighted: false,
    category: "infrastructure",
  },
]