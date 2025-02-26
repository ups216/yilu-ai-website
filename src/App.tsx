import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Rocket, Target, Lightbulb, User, Calendar, LineChart, Mic, Briefcase, Video, Newspaper } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          alt="AI Technology"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-purple-200 font-medium">Leading AI Media Consultancy</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              易论AI：专注人工智能企业家访谈
            </h1>
            <p className={`text-xl text-gray-200 mb-8 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
              我们帮助AI企业家打造个人IP，提升品牌影响力，实现商业价值
            </p>
            <div className={`flex gap-4 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-50 transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl">
                立即开始 <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                观看演示 <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </header>

      {/* Features Section - AI时代，创始人IP势在必行 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium">创始人IP势在必行</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              为什么选择我们？
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-purple-600" />,
                title: "商业名片",
                description: "人格化的视频版商业名片，降低社交沟通成本",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&fit=crop&q=80"
              },
              {
                icon: <LineChart className="w-8 h-8 text-purple-600" />,
                title: "获客渠道",
                description: "高信任度的获客渠道，单条作品最高获取50+合作线索",
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=300&fit=crop&q=80"
              },
              {
                icon: <Mic className="w-8 h-8 text-purple-600" />,
                title: "账号加速",
                description: "创始人IP账号启动加速器，精准导流快速起号",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&fit=crop&q=80"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up group"
                style={{ animationDelay: `${0.2 * (index + 3)}s` }}
              >
                <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center animate-float">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - 《易论AI》价值观 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium">我们的价值观</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">成为极具影响力创始人的关键一步</h2>
            <p className="text-lg text-gray-600">
              每一位致力于开拓商业版图的创始人而言，拥有一条专属的 “商业访谈视频” 已成为一种必然
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - 《易论AI》发展历程 */}
      <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10" />
        <div className="absolute inset-0 bg-purple-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-purple-300" />
              <span className="text-purple-300 font-medium">发展历程</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">我们的成长轨迹</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <User className="w-8 h-8" />, number: "50+", label: "AI创业者访谈" },
              { icon: <LineChart className="w-8 h-8" />, number: "5万+", label: "全网粉丝" },
              { icon: <Video className="w-8 h-8" />, number: "300万+", label: "视频播放量" },
              { icon: <Newspaper className="w-8 h-8" />, number: "30+", label: "平台影响力" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex justify-center mb-4 animate-float">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 transition-all duration-300 hover:scale-110">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - 易论 AI 创始人 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium">创始人</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">易亚婷</h2>
            <div className="max-w-2xl mx-auto text-lg text-gray-600 space-y-4">
              <p>台湾大学本科 / 长江商学院硕士在读</p>
              <p>全领域资深双语主持人 & 主播</p>
              <p>福布斯U30（2021）科技类得主</p>
              <p>深耕 AI 领域，服务120+中大型企业AI落地</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            准备好放大你的影响力了吗？
          </h2>
          <p className="text-lg text-gray-600 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            让我们将您的AI专业知识转化为强大的媒体影响力
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-up shadow-md" style={{ animationDelay: '0.6s' }}>
            预约咨询
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-white font-semibold mb-4">易论AI</h3>
              <p className="text-sm">专注人工智能企业家访谈</p>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-white font-semibold mb-4">服务</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors duration-200">企业家访谈</li>
                <li className="hover:text-white transition-colors duration-200">个人IP打造</li>
                <li className="hover:text-white transition-colors duration-200">品牌影响力提升</li>
                <li className="hover:text-white transition-colors duration-200">商业价值实现</li>
              </ul>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-white font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors duration-200">团队介绍</li>
                <li className="hover:text-white transition-colors duration-200">发展历程</li>
                <li className="hover:text-white transition-colors duration-200">加入我们</li>
                <li className="hover:text-white transition-colors duration-200">联系我们</li>
              </ul>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-white font-semibold mb-4">关注我们</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors duration-200">微信</li>
                <li className="hover:text-white transition-colors duration-200">微博</li>
                <li className="hover:text-white transition-colors duration-200">抖音</li>
                <li className="hover:text-white transition-colors duration-200">B站</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            © 2024 易论AI. 版权所有。
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
