import { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("找企业");

  const handleSearch = () => {
    console.log("搜索:", searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 模拟搜索结果数据
  const searchResults = [
    {
      id: 1,
      title: "宇数机器人Unitree H1 / H1-2",
      description: "国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......"
    },
    {
      id: 2,
      title: "宇数机器人Unitree H1 / H1-2",
      description: "国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......"
    },
    {
      id: 3,
      title: "宇数机器人Unitree H1 / H1-2",
      description: "国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 返回按钮 */}
      <div className="bg-blue-600 px-4 py-2">
        <button className="text-white text-sm">
          返回
        </button>
      </div>

      {/* 头部标题区域 */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 px-6 py-8 text-center">
        <h1 className="text-white text-2xl font-bold mb-2">
          中阿创新合作平台
        </h1>
        <p className="text-white text-sm opacity-90">
          链接资源、资本与市场的桥梁
        </p>
      </div>

      {/* 搜索区域 */}
      <div className="bg-white mx-4 mt-6 rounded-lg shadow-md p-4">
        {/* 分类选择器 */}
        <div className="mb-4">
          <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between">
            <span className="text-gray-700">{selectedCategory}</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 搜索输入框 */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="输入关键词"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 搜索按钮 */}
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          搜索
        </button>
      </div>

      {/* 搜索结果区域 */}
      <div className="px-4 mt-6">
        {/* 分类标签 */}
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm">
            找企业
          </span>
        </div>

        {/* 搜索关键词显示 */}
        <div className="mb-4">
          <h2 className="text-gray-700 text-lg">
            搜索关键词: <span className="text-blue-600">机器人</span>
          </h2>
        </div>

        {/* 搜索结果列表 */}
        <div className="space-y-4">
          {searchResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-sm p-4 flex">
              {/* 左侧图片 */}
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex-shrink-0 mr-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
              </div>

              {/* 右侧内容 */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-medium mb-2 text-base">
                  {result.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部间距 */}
      <div className="h-8"></div>
    </div>
  );
};

export default Page;
