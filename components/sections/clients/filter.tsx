"use client"

interface CategoryFilterProps {
    categories: string[]
    activeCategory: string
    setActiveCategory: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                            ? "bg-emerald-600 text-white shadow-md"
                            : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
