import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Button, Input, Selector, Card } from 'antd-mobile';
import { ArrowLeft, Search, ChevronDown } from 'lucide-react';

const Page: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState('找企业');

  const categoryOptions = [
    { label: '找企业', value: '找企业' },
    { label: '找项目', value: '找项目' },
    { label: '找资源', value: '找资源' },
    { label: '找合作', value: '找合作' }
  ];

  const handleSearch = () => {
    console.log('搜索:', { category: searchCategory, text: searchText });
  };

  const handleCategoryChange = (value: string[]) => {
    if (value.length > 0) {
      setSearchCategory(value[0]);
    }
  };

  const searchResults = [
    {
      id: 1,
      title: '宇数机器人Unitree H1 / H1-2',
      description: '国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......',
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      title: '宇数机器人Unitree H1 / H1-2',
      description: '国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......',
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      title: '宇数机器人Unitree H1 / H1-2',
      description: '国内创新研发能跑的全尺寸通用人形持续OTA软件升级更新机器人，持续OTA软件升级更新......',
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#203A5C] to-[#185ABD] px-4 py-3">
        <div className="flex items-center">
          <NavLink to="/" className="text-white">
            <ArrowLeft size={20} />
          </NavLink>
          <span className="text-white text-sm ml-2">返回</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">
            中阿创新合作平台
          </h1>
          <p className="text-base text-[#666666]">
            链接资源、资本与市场的桥梁
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-6 shadow-sm">
          <div className="p-4">
            {/* Category Selector */}
            <div className="mb-4">
              <div className="text-sm text-[#666666] mb-2">选择类别</div>
              <Selector
                options={categoryOptions}
                value={[searchCategory]}
                onChange={handleCategoryChange}
                style={{
                  '--checked-color': '#185ABD'
                }}
              />
            </div>

            {/* Search Input */}
            <div className="mb-4">
              <Input
                placeholder="输入关键词"
                value={searchText}
                onChange={setSearchText}
                className="bg-[#F5F5F5] border-none text-[#333333]"
                style={{
                  '--placeholder-color': '#999999'
                }}
              />
            </div>

            {/* Search Button */}
            <Button
              color="primary"
              size="large"
              block
              onClick={handleSearch}
              className="bg-[#185ABD] text-white font-medium"
            >
              搜索
            </Button>
          </div>
        </Card>

        {/* Search Results Section */}
        <div className="mb-4">
          <div className="bg-[#185ABD] text-white px-3 py-2 rounded-t-lg">
            <span className="text-sm">搜索关键词: 机器人</span>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          {searchResults.map((result) => (
            <Card key={result.id} className="shadow-sm">
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  {/* Image */}
                  <div className="w-16 h-16 bg-[#203A5C] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-[#333333] mb-2">
                      {result.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-5">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#203A5C] text-white text-center py-4 mt-8">
        <p className="text-sm">h5-footer</p>
      </div>
    </div>
  );
};

export default Page;
