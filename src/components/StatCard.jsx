function StatCard({title, value }) {
    return (
        <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
            <h2 className="text-[#880011]">
                {title}
            </h2>
            <p className="text-3xl text-slate-500 font-bold mt-2">
                {value}
            </p>
        </div>
    )
}

export default StatCard