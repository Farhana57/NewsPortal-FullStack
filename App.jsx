import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- ১. Components Import ---
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import MouseCursor from './components/MouseCursor';
import FloatingButtons from './components/FloatingButtons';
import CategoryPage from './components/CategoryPage';

// --- ২. Pages Import ---
import Home from './pages/Home';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

// --- ৩. সব নিউজ ডাটা (২০২৬ সালের আপডেট অনুযায়ী) ---
const allNewsData = [
  { id: 1, category: "middle-east", title: "Global Peace Summit 2026", image: "https://images.pexels.com/photos/4427509/pexels-photo-4427509.jpeg", date: "May 06, 2026", desc: "মধ্যপ্রাচ্যের শান্তি আলোচনায় নতুন মোড়।" },
  { id: 2, category: "middle-east", title: "Dubai Tech Expo 2026", image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", date: "May 05, 2026", desc: "দুবাইয়ে শুরু হলো বিশ্বের সবচেয়ে বড় টেক মেলা।" },
  { id: 3, category: "middle-east", title: "Saudi Green Initiative", image: "https://images.pexels.com/photos/1005164/pexels-photo-1005164.jpeg", date: "May 04, 2026", desc: "মরুভূমিকে সবুজ করতে সৌদি আরবের বিশাল প্রকল্প।" },
  { id: 4, category: "middle-east", title: "Qatar Cultural Festival", image: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg", date: "May 03, 2026", desc: "কাতারে শুরু হলো ঐতিহ্যবাহী সাংস্কৃতিক উৎসব।" },
  { id: 5, category: "sport", title: "Champions League Final", image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg", date: "May 06, 2026", desc: "চ্যাম্পিয়ন্স লিগ ফাইনাল নিয়ে ফুটবল বিশ্বে উত্তেজনা।" },
  { id: 6, category: "sport", title: "T20 World Cup Warmup", image: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg", date: "May 05, 2026", desc: "টি-টোয়েন্টি বিশ্বকাপের প্রস্তুতি ম্যাচে বড় জয়।" },
  { id: 7, category: "sport", title: "Tennis Grand Slam 2026", image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg", date: "May 04, 2026", desc: "গ্র্যান্ড স্ল্যামের লড়াইয়ে নামছে সেরা তারকারা।" },
  { id: 8, category: "sport", title: "New Records in Athletics", image: "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg", date: "May 03, 2026", desc: "ট্র্যাক অ্যান্ড ফিল্ডে নতুন বিশ্ব রেকর্ড গড়লেন তরুণ অ্যাথলেট।" },
  { id: 9, category: "video", title: "Behind the Tech Giants", image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", date: "May 06, 2026", desc: "টেক জায়ান্টদের অফিসের অন্দরমহল দেখুন।" },
  { id: 10, category: "video", title: "Nature's Mystery Video", image: "https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg", date: "May 05, 2026", desc: "প্রকৃতির রহস্যময় দিক নিয়ে বিশেষ ডকুমেন্টারি।" },
  { id: 11, category: "video", title: "Space Mission 2026 Live", image: "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg", date: "May 04, 2026", desc: "মহাকাশ গবেষণার নতুন ভিডিও চিত্র।" },
  { id: 12, category: "video", title: "Cooking Masterclass: Asian", image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg", date: "May 03, 2026", desc: "সেরা রন্ধনশিল্পীর থেকে শিখুন এশিয়ান খাবারের রহস্য।" },
  { id: 13, category: "opinion", title: "The Future of AI in South Asia", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", date: "May 06, 2026", desc: "দক্ষিণ এশিয়ার প্রযুক্তিতে কৃত্রিম বুদ্ধিমত্তার প্রভাব নিয়ে একটি বিশেষ কলাম।" },
  { id: 14, category: "opinion", title: "Digital Literacy: A Necessity", image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg", date: "May 05, 2026", desc: "নতুন প্রজন্মের জন্য ডিজিটাল সাক্ষরতা কেন অপরিহার্য হয়ে দাঁড়িয়েছে।" },
  { id: 15, category: "opinion", title: "The Rise of Freelancing in BD", image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg", date: "May 04, 2026", desc: "বাংলাদেশের অর্থনীতিতে ফ্রিল্যান্সারদের ক্রমবর্ধমান অবদান ও ভবিষ্যৎ।" },
  { id: 16, category: "opinion", title: "Climate Change: Global Action", image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg", date: "May 03, 2026", desc: "জলবায়ু পরিবর্তন রোধে বিশ্বনেতাদের এখনই কার্যকর পদক্ষেপ নিতে হবে।" },
  { id: 17, category: "explained", title: "How 5G Technology Works", image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg", date: "May 06, 2026", desc: "৫জি প্রযুক্তি কীভাবে ইন্টারনেটের গতি পরিবর্তন করছে তা সহজভাবে ব্যাখ্যা।" },
  { id: 18, category: "explained", title: "Understanding Carbon Credits", image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg", date: "May 05, 2026", desc: "কার্বন ক্রেডিট কী এবং এটি কেন পরিবেশের জন্য গুরুত্বপূর্ণ।" },
  { id: 19, category: "explained", title: "The Basics of Web 3.0", image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg", date: "May 04, 2026", desc: "ইন্টারনেটের পরবর্তী প্রজন্ম বা ওয়েব ৩.০ নিয়ে বিস্তারিত আলোচনা।" },
  { id: 20, category: "explained", title: "Global Inflation Explained", image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg", date: "May 03, 2026", desc: "বিশ্বব্যাপী মুদ্রাস্ফীতির কারণ এবং আমাদের জনজীবনে এর প্রভাব।" }
];

function App() {
  return (
    <BrowserRouter>
      {/* গ্লোবাল কম্পোনেন্টস */}
      <MouseCursor />
      <Header /> 
    
      <div className="min-h-screen bg-slate-100 dark:bg-gray-900 transition-colors duration-500">
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* হোম এবং নিউজ পেজ: এখানে ডাটা পাস করা হয়েছে */}
            <Route path="/" element={<Home allNews={allNewsData} />} />
            <Route path="/news" element={<News allNews={allNewsData} />} />
            
            {/* নিউজ ডিটেইলস: আইডি অনুযায়ী ডাটা ফিল্টার হবে */}
            <Route path="/news/:id" element={<NewsDetails allNews={allNewsData} />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} /> 
            
            {/* ডাইনামিক ক্যাটাগরি পেজ: এখানেও ডাটা পাঠানো হয়েছে */}
            <Route path="/category/:categoryName" element={<CategoryPage allNews={allNewsData} />} />
            
            {/* ভুল পাথ দিলে হোমে ফিরে যাবে */}
            <Route path="*" element={<Home allNews={allNewsData} />} />
          </Routes>
        </main>
      </div>

      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;