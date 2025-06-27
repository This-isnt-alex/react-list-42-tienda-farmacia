import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, ShoppingCart, Search, Star, Shield, Leaf, Award, Truck, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      image: "https://ext.same-assets.com/3917655287/927055256.jpeg",
      title: "Skin & Beauty",
      subtitle: "Radiate from Within",
      description: "Discover our premium collagen and beauty supplements for healthy, glowing skin.",
      ctaText: "Shop Beauty",
      ctaLink: "#beauty"
    },
    {
      id: 2,
      image: "https://ext.same-assets.com/3917655287/819009092.jpeg",
      title: "New Bundles",
      subtitle: "Save More, Feel Better",
      description: "Complete wellness bundles designed for your health journey. Maximum nutrition, maximum savings.",
      ctaText: "Shop Bundles",
      ctaLink: "#bundles"
    },
    {
      id: 3,
      image: "https://ext.same-assets.com/3917655287/55587582.jpeg",
      title: "Plant-Based Protein",
      subtitle: "Pure Plant Power",
      description: "Organic, clean protein powders to fuel your active lifestyle naturally.",
      ctaText: "Shop Protein",
      ctaLink: "#protein"
    },
    {
      id: 4,
      image: "https://ext.same-assets.com/3917655287/745678091.jpeg",
      title: "Shelf-Stable Probiotics",
      subtitle: "Digestive Wellness",
      description: "Advanced probiotic formulas that don't require refrigeration for ultimate convenience.",
      ctaText: "Shop Probiotics",
      ctaLink: "#probiotics"
    },
    {
      id: 5,
      image: "https://ext.same-assets.com/3917655287/865870626.jpeg",
      title: "Daily Essentials",
      subtitle: "Everything You Need",
      description: "Complete nutrition in convenient daily packs. Your wellness routine simplified.",
      ctaText: "Shop Daily Packs",
      ctaLink: "#daily"
    }
  ]

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const productCategories = [
    {
      title: "Immune Support",
      image: "https://ext.same-assets.com/3917655287/706428072.jpeg",
      description: "Boost your natural defenses"
    },
    {
      title: "Stress Relief",
      image: "https://ext.same-assets.com/3917655287/3182270252.jpeg",
      description: "Find your natural calm"
    },
    {
      title: "Sleep Support",
      image: "https://ext.same-assets.com/3917655287/339935161.jpeg",
      description: "Rest and recover naturally"
    },
    {
      title: "Energy & Vitality",
      image: "https://ext.same-assets.com/3917655287/3508041766.jpeg",
      description: "Natural energy all day"
    },
    {
      title: "Sports Nutrition",
      image: "https://ext.same-assets.com/3917655287/514793663.jpeg",
      description: "Fuel your performance"
    },
    {
      title: "Brain & Memory",
      image: "https://ext.same-assets.com/3917655287/4102667644.jpeg",
      description: "Sharp mind, clear focus"
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Ultimate Immune Complex",
      price: "$34.99",
      originalPrice: "$44.99",
      rating: 4.8,
      reviews: 127,
      image: "https://ext.same-assets.com/3917655287/2217909184.jpeg",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Advanced Probiotic Formula",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.9,
      reviews: 203,
      image: "https://ext.same-assets.com/3917655287/812318602.jpeg",
      badge: "New"
    },
    {
      id: 3,
      name: "Plant-Based Protein Powder",
      price: "$42.99",
      originalPrice: "$52.99",
      rating: 4.7,
      reviews: 89,
      image: "https://ext.same-assets.com/3917655287/2793292494.jpeg",
      badge: "Organic"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/stay-well-logo.png" alt="Stay Well Logo" className="h-12 w-12" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">TOXIN FREE PRODUCTS</h1>
                <p className="text-sm text-primary font-medium">To Just Stay Well!</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary font-medium flex items-center">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Science</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </div>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Science</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Slide Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <h2 className="text-5xl lg:text-7xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-primary-200">
                      {slide.subtitle}
                    </h3>
                    <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-primary'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex items-center space-x-2">
              <img src="https://ext.same-assets.com/3917655287/4027491965.png" alt="USDA Organic" className="h-12" />
              <span className="text-sm font-medium text-gray-700">USDA Organic</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://ext.same-assets.com/3917655287/576976579.jpeg" alt="Non-GMO" className="h-12" />
              <span className="text-sm font-medium text-gray-700">Non-GMO Tested</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-10 w-10 text-primary" />
              <span className="text-sm font-medium text-gray-700">Third-Party Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect supplements for your specific health and wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular toxin-free supplements, trusted by thousands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Stay Well Global?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to providing the highest quality, toxin-free nutritional supplements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h4>
              <p className="text-gray-600">All natural ingredients with no artificial additives or toxins</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Tested</h4>
              <p className="text-gray-600">Rigorously tested for purity, potency, and safety</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Science-Backed</h4>
              <p className="text-gray-600">Formulated based on the latest nutritional research</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h4>
              <p className="text-gray-600">Free shipping on orders over $50 with fast delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated on Wellness</h3>
          <p className="text-lg mb-8 text-primary-100">
            Get exclusive offers, health tips, and new product announcements
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/stay-well-logo.png" alt="Stay Well Logo" className="h-10 w-10" />
                <div>
                  <h4 className="font-bold">TOXIN FREE PRODUCTS</h4>
                  <p className="text-sm text-gray-400">To Just Stay Well!</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Dedicated to providing premium, toxin-free nutritional supplements for optimal health and wellness.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Science</a></li>
                <li><a href="#" className="hover:text-white">Quality Promise</a></li>
                <li><a href="#" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h5 className="font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-WELLNESS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@staywellglobal.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Austin, TX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Stay Well Global, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
