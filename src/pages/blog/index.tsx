import { Button, Input, TabBar, Card } from "antd-mobile";
import { Search, BookOpen, Package, Settings, Activity, ArrowRight } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('搜索：', searchText);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const tabs = [
    {
      key: 'learning',
      title: '学习中心',
      icon: <BookOpen size={20} />,
    },
    {
      key: 'products',
      title: '产品中心',
      icon: <Package size={20} />,
    },
    {
      key: 'development',
      title: '开发基础',
      icon: <Settings size={20} />,
    },
    {
      key: 'testing',
      title: '实况测试',
      icon: <Activity size={20} />,
    },
  ];

  const products = [
    {
      id: 1,
      title: '宇数机械臂 Unitree H1 / H1-2',
      description: '四川宇数科技有限公司在自主研发的智能机械臂、机器人产品，为AI产业提供高性能解决方案。',
      status: '上线',
      image: '/api/placeholder/300/200',
      category: '机械臂',
    },
    {
      id: 2,
      title: '宇数机械臂 Unitree H1 / H1-2',
      description: '四川宇数科技有限公司在自主研发的智能机械臂、机器人产品，为AI产业提供高性能解决方案。',
      status: '保证',
      image: '/api/placeholder/300/200',
      category: '机械臂',
    },
    {
      id: 3,
      title: '宇数机械臂 Unitree H1 / H1-2',
      description: '四川宇数科技有限公司在自主研发的智能机械臂、机器人产品，为AI产业提供高性能解决方案。',
      status: '上线',
      image: '/api/placeholder/300/200',
      category: '机械臂',
    },
    {
      id: 4,
      title: '宇数机械臂 Unitree H1 / H1-2',
      description: '四川宇数科技有限公司在自主研发的智能机械臂、机器人产品，为AI产业提供高性能解决方案。',
      status: '保证',
      image: '/api/placeholder/300/200',
      category: '机械臂',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 pb-20">
      {/* Header */}
      <header className="bg-slate-700 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-2 tracking-wide">中阿创新合作平台</h1>
          <p className="text-base text-gray-200">链接东西，点亮每个市场的创新</p>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white px-4 py-4 shadow rounded-xl -mt-6 mx-4 mb-4 flex items-center gap-2">
        <Input
          placeholder="工作室"
          value={searchText}
          onChange={setSearchText}
          className="flex-1 bg-gray-50 rounded-lg h-12 placeholder:text-gray-400"
          style={{ '--font-size': '16px' }}
        />
        <Button
          color="primary"
          size="middle"
          onClick={handleSearch}
          className="px-6 h-12 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
          style={{ '--border-radius': '8px' }}
        >
          <span className="flex flex-row items-center gap-1 whitespace-nowrap">
            <Search size={18} />
            搜索
          </span>
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-2 space-y-4">
        {activeTab === 'products' && (
          <div className="space-y-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="shadow-lg bg-white rounded-2xl overflow-hidden transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                  </div>
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold truncate">{product.title}</h3>
                      <span className={`flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${product.status === '上线' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                  </div>
                  {/* Arrow Icon */}
                  <ArrowRight size={22} className="text-gray-400 hover:text-blue-500 transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        )}
        {activeTab !== 'products' && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🚧</div>
              <p>该功能正在开发中...</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <TabBar
        activeKey={activeTab}
        onChange={handleTabChange}
        className="fixed bottom-0 left-0 w-full z-50 border-t border-gray-200 bg-white shadow-lg"
      >
        {tabs.map((tab) => (
          <TabBar.Item
            key={tab.key}
            icon={tab.icon}
            title={tab.title}
            className="flex flex-col items-center justify-center text-xs"
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Page;
