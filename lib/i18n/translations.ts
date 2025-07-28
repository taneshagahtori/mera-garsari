export type Language = "english" | "hindi"

export type TranslationKey =
  | "app.name"
  | "app.tagline"
  | "nav.home"
  | "nav.regions"
  | "nav.families"
  | "nav.add"
  | "nav.more"
  | "home.featuredPlaces"
  | "home.upcomingEvents"
  | "home.recentBlogs"
  | "home.viewAll"
  | "regions.title"
  | "regions.subtitle"
  | "families.title"
  | "families.subtitle"
  | "families.members"
  | "places.title"
  | "places.subtitle"
  | "events.title"
  | "events.subtitle"
  | "blogs.title"
  | "blogs.subtitle"
  | "search.title"
  | "search.results"
  | "search.noResults"
  | "search.searching"
  | "search.all"
  | "search.families"
  | "search.blogs"
  | "search.places"
  | "settings.title"
  | "settings.subtitle"
  | "settings.appearance"
  | "settings.darkMode"
  | "settings.language"
  | "settings.selectLanguage"
  | "settings.contactUs"
  | "settings.contactUsDesc"
  | "settings.about"
  | "settings.appInfo"
  | "settings.appDesc"
  | "settings.version"
  | "settings.developer"
  | "addContent.title"
  | "addContent.subtitle"
  | "addContent.blog"
  | "addContent.poem"
  | "addContent.photo"
  | "addContent.audio"
  | "addContent.submit"
  | "addContent.reviewNote"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  english: {
    "app.name": "Mera Garsari",
    "app.tagline": "Discover the hidden gem of Uttarakhand",
    "nav.home": "Home",
    "nav.regions": "Regions",
    "nav.families": "Families",
    "nav.add": "Add",
    "nav.more": "More",
    "home.featuredPlaces": "Featured Places",
    "home.upcomingEvents": "Upcoming Events",
    "home.recentBlogs": "Recent Blogs",
    "home.viewAll": "View All",
    "regions.title": "Regions of Garsari",
    "regions.subtitle": "Explore the 6 distinct regions that make up the beautiful Garsari area",
    "families.title": "Families of Garsari",
    "families.subtitle": "Browse all families across the different regions of Garsari",
    "families.members": "family members",
    "places.title": "Places in Garsari",
    "places.subtitle": "Explore the landmarks, natural wonders, and cultural sites of Garsari",
    "events.title": "Upcoming Events",
    "events.subtitle": "Discover cultural celebrations, festivals, and community gatherings in Garsari",
    "blogs.title": "Community Content",
    "blogs.subtitle": "Explore blogs, poems, photos, and more from the Garsari community",
    "search.title": "Search Results",
    "search.results": "results for",
    "search.noResults": "No results found for",
    "search.searching": "Searching...",
    "search.all": "All",
    "search.families": "Families",
    "search.blogs": "Blogs",
    "search.places": "Places",
    "settings.title": "Settings",
    "settings.subtitle": "Customize your app experience and get help",
    "settings.appearance": "Appearance",
    "settings.darkMode": "Dark Mode",
    "settings.language": "Language",
    "settings.selectLanguage": "Select Language",
    "settings.contactUs": "Contact Us",
    "settings.contactUsDesc": "Have questions, feedback, or need assistance? Reach out to us directly.",
    "settings.about": "About",
    "settings.appInfo": "App Information",
    "settings.appDesc":
      "Mera Garsari is dedicated to preserving and sharing the rich cultural heritage, history, and community information of Garsari, Uttarakhand.",
    "settings.version": "Version: 1.0.0",
    "settings.developer": "Developed by: Tanesha Gahtori",
    "addContent.title": "Add New Content",
    "addContent.subtitle": "Share your stories, poems, photos, and more with the Garsari community",
    "addContent.blog": "Blog",
    "addContent.poem": "Poem",
    "addContent.photo": "Photo",
    "addContent.audio": "Audio",
    "addContent.submit": "Submit for Review",
    "addContent.reviewNote": "Your content will be reviewed by an admin before being published",
  },
  hindi: {
    "app.name": "मेरा गरसारी",
    "app.tagline": "उत्तराखंड के छिपे हुए रत्न की खोज करें",
    "nav.home": "होम",
    "nav.regions": "क्षेत्र",
    "nav.families": "परिवार",
    "nav.add": "जोड़ें",
    "nav.more": "अधिक",
    "home.featuredPlaces": "प्रमुख स्थान",
    "home.upcomingEvents": "आगामी कार्यक्रम",
    "home.recentBlogs": "हाल के ब्लॉग",
    "home.viewAll": "सभी देखें",
    "regions.title": "गरसारी के क्षेत्र",
    "regions.subtitle": "सुंदर गरसारी क्षेत्र बनाने वाले 6 अलग-अलग क्षेत्रों का अन्वेषण करें",
    "families.title": "गरसारी के परिवार",
    "families.subtitle": "गरसारी के विभिन्न क्षेत्रों में सभी परिवारों को ब्राउज़ करें",
    "families.members": "परिवार के सदस्य",
    "places.title": "गरसारी में स्थान",
    "places.subtitle": "गरसारी के प्रमुख स्थलों, प्राकृतिक आश्चर्यों और सांस्कृतिक स्थलों का अन्वेषण करें",
    "events.title": "आगामी कार्यक्रम",
    "events.subtitle": "गरसारी में सांस्कृतिक उत्सव, त्योहार और सामुदायिक सभाओं की खोज करें",
    "blogs.title": "सामुदायिक सामग्री",
    "blogs.subtitle": "गरसारी समुदाय से ब्लॉग, कविताएँ, फोटो और बहुत कुछ का अन्वेषण करें",
    "search.title": "खोज परिणाम",
    "search.results": "परिणाम",
    "search.noResults": "के लिए कोई परिणाम नहीं मिला",
    "search.searching": "खोज जारी है...",
    "search.all": "सभी",
    "search.families": "परिवार",
    "search.blogs": "ब्लॉग",
    "search.places": "स्थान",
    "settings.title": "सेटिंग्स",
    "settings.subtitle": "अपने ऐप अनुभव को अनुकूलित करें और सहायता प्राप्त करें",
    "settings.appearance": "दिखावट",
    "settings.darkMode": "डार्क मोड",
    "settings.language": "भाषा",
    "settings.selectLanguage": "भाषा चुनें",
    "settings.contactUs": "संपर्क करें",
    "settings.contactUsDesc": "प्रश्न, प्रतिक्रिया या सहायता की आवश्यकता है? हमसे सीधे संपर्क करें।",
    "settings.about": "के बारे में",
    "settings.appInfo": "ऐप जानकारी",
    "settings.appDesc":
      "मेरा गरसारी उत्तराखंड के गरसारी की समृद्ध सांस्कृतिक विरासत, इतिहास और सामुदायिक जानकारी को संरक्षित करने और साझा करने के लिए समर्पित है।",
    "settings.version": "संस्करण: 1.0.0",
    "settings.developer": "विकसित: गरसारी सामुदायिक विकास टीम",
    "addContent.title": "नई सामग्री जोड़ें",
    "addContent.subtitle": "अपनी कहानियां, कविताएं, फोटो और बहुत कुछ गरसारी समुदाय के साथ साझा करें",
    "addContent.blog": "ब्लॉग",
    "addContent.poem": "कविता",
    "addContent.photo": "फोटो",
    "addContent.audio": "ऑडियो",
    "addContent.submit": "समीक्षा के लिए जमा करें",
    "addContent.reviewNote": "आपकी सामग्री प्रकाशित होने से पहले एक व्यवस्थापक द्वारा समीक्षा की जाएगी",
  },
}
