// Application data with comprehensive feature matrix
const defaultData = {
  "competitors": {
    "fishbrain": {
      "name": "Fishbrain",
      "users": "15M+",
      "revenue": "$14.5M",
      "pricing": "$79.99/year",
      "position": "Social Leader",
      "features": {
        "social_community": {
          "user_profiles": true,
          "photo_sharing": true,
          "community_forums": true,
          "friend_connections": true,
          "leaderboards": true,
          "direct_messaging": true,
          "group_management": true,
          "social_verification": true,
          "live_broadcasting": "premium",
          "catch_challenges": true,
          "user_ratings": true,
          "content_moderation": true
        },
        "mapping_navigation": {
          "interactive_maps": true,
          "gps_navigation": true,
          "depth_charts": "premium",
          "offline_downloads": true,
          "custom_spots": true,
          "spot_sharing": true,
          "location_tracking": true,
          "map_layers": true,
          "satellite_imagery": true,
          "3d_visualization": false,
          "hazard_marking": "partial",
          "access_mapping": true,
          "route_planning": "partial",
          "carplay_integration": false
        },
        "ai_prediction": {
          "bite_forecasting": true,
          "species_identification": true,
          "catch_prediction": true,
          "pattern_recognition": true,
          "success_prediction": true,
          "timing_optimization": true,
          "water_clarity_prediction": "partial",
          "bait_recommendations": true,
          "individual_recognition": false,
          "ml_improvements": true
        },
        "weather_environmental": {
          "weather_data": true,
          "marine_forecasts": true,
          "water_temperature": true,
          "tide_charts": true,
          "barometric_pressure": true,
          "wind_data": true,
          "moon_phase": true,
          "seasonal_patterns": true,
          "water_levels": "partial",
          "flow_rates": false,
          "uv_index": true,
          "storm_tracking": true
        },
        "species_intelligence": {
          "species_database": true,
          "location_species": true,
          "migration_patterns": true,
          "size_tracking": true,
          "regulations_data": true,
          "stocking_info": true,
          "historical_data": true,
          "abundance_mapping": "partial",
          "spawning_periods": true,
          "feeding_insights": "partial",
          "size_distribution": true,
          "population_health": false,
          "invasive_alerts": "partial",
          "habitat_requirements": "partial"
        },
        "gear_equipment": {
          "tackle_management": false,
          "gear_recommendations": true,
          "equipment_reviews": true,
          "marketplace": true,
          "gear_tracking": false,
          "performance_tracking": false,
          "maintenance_reminders": false,
          "comparison_tools": "partial",
          "price_tracking": false,
          "rental_integration": false
        },
        "guide_booking": {
          "guide_directory": false,
          "booking_system": false,
          "payment_processing": false,
          "review_system": false,
          "trip_planning": false,
          "cancellation_management": false,
          "insurance_options": false,
          "multilingual_support": false
        },
        "private_access": {
          "land_listings": false,
          "access_booking": false,
          "property_verification": false,
          "fee_management": false,
          "landowner_communication": false,
          "amenity_details": false
        },
        "conservation_sustainability": {
          "catch_release_tracking": true,
          "conservation_projects": "partial",
          "cleanup_logging": false,
          "endangered_reporting": "partial",
          "research_sharing": true,
          "education_content": "partial",
          "pollution_reporting": false,
          "habitat_restoration": false
        },
        "safety_emergency": {
          "emergency_contacts": false,
          "location_sharing": true,
          "weather_alerts": true,
          "first_aid_info": false,
          "emergency_services": false,
          "trip_checkin": false,
          "equipment_safety": false,
          "hazard_reporting": "partial"
        },
        "analytics_reporting": {
          "catch_statistics": true,
          "pattern_analysis": true,
          "success_metrics": true,
          "gear_effectiveness": "partial",
          "location_performance": true,
          "seasonal_trends": true,
          "goal_tracking": "partial",
          "data_export": false,
          "custom_reports": false,
          "predictive_analytics": true
        },
        "tournament_competition": {
          "tournament_registration": false,
          "live_tracking": false,
          "photo_verification": true,
          "scoring_ranking": true,
          "prize_management": false,
          "tournament_history": false
        }
      }
    },
    "infinite_outdoors": {
      "name": "Infinite Outdoors",
      "users": "100K+",
      "revenue": "Est. $20M",
      "pricing": "$199.99/year",
      "position": "Private Access Pioneer",
      "features": {
        "social_community": {
          "user_profiles": true,
          "photo_sharing": false,
          "community_forums": false,
          "friend_connections": false,
          "leaderboards": false,
          "direct_messaging": false,
          "group_management": false,
          "social_verification": false,
          "live_broadcasting": false,
          "catch_challenges": false,
          "user_ratings": false,
          "content_moderation": false
        },
        "mapping_navigation": {
          "interactive_maps": true,
          "gps_navigation": true,
          "depth_charts": false,
          "offline_downloads": true,
          "custom_spots": true,
          "spot_sharing": false,
          "location_tracking": true,
          "map_layers": true,
          "satellite_imagery": true,
          "3d_visualization": false,
          "hazard_marking": true,
          "access_mapping": true,
          "route_planning": true,
          "carplay_integration": false
        },
        "ai_prediction": {
          "bite_forecasting": false,
          "species_identification": false,
          "catch_prediction": false,
          "pattern_recognition": false,
          "success_prediction": false,
          "timing_optimization": false,
          "water_clarity_prediction": false,
          "bait_recommendations": false,
          "individual_recognition": false,
          "ml_improvements": false
        },
        "weather_environmental": {
          "weather_data": true,
          "marine_forecasts": false,
          "water_temperature": false,
          "tide_charts": false,
          "barometric_pressure": false,
          "wind_data": true,
          "moon_phase": false,
          "seasonal_patterns": false,
          "water_levels": true,
          "flow_rates": true,
          "uv_index": false,
          "storm_tracking": true
        },
        "species_intelligence": {
          "species_database": "partial",
          "location_species": true,
          "migration_patterns": false,
          "size_tracking": false,
          "regulations_data": true,
          "stocking_info": false,
          "historical_data": false,
          "abundance_mapping": false,
          "spawning_periods": false,
          "feeding_insights": false,
          "size_distribution": false,
          "population_health": false,
          "invasive_alerts": true,
          "habitat_requirements": true
        },
        "gear_equipment": {
          "tackle_management": false,
          "gear_recommendations": false,
          "equipment_reviews": false,
          "marketplace": false,
          "gear_tracking": false,
          "performance_tracking": false,
          "maintenance_reminders": false,
          "comparison_tools": false,
          "price_tracking": false,
          "rental_integration": false
        },
        "guide_booking": {
          "guide_directory": false,
          "booking_system": false,
          "payment_processing": false,
          "review_system": false,
          "trip_planning": false,
          "cancellation_management": false,
          "insurance_options": false,
          "multilingual_support": false
        },
        "private_access": {
          "land_listings": true,
          "access_booking": true,
          "property_verification": true,
          "fee_management": true,
          "landowner_communication": true,
          "amenity_details": true
        },
        "conservation_sustainability": {
          "catch_release_tracking": false,
          "conservation_projects": false,
          "cleanup_logging": false,
          "endangered_reporting": false,
          "research_sharing": false,
          "education_content": false,
          "pollution_reporting": true,
          "habitat_restoration": "partial"
        },
        "safety_emergency": {
          "emergency_contacts": true,
          "location_sharing": true,
          "weather_alerts": true,
          "first_aid_info": false,
          "emergency_services": "partial",
          "trip_checkin": true,
          "equipment_safety": false,
          "hazard_reporting": true
        },
        "analytics_reporting": {
          "catch_statistics": false,
          "pattern_analysis": false,
          "success_metrics": false,
          "gear_effectiveness": false,
          "location_performance": true,
          "seasonal_trends": false,
          "goal_tracking": false,
          "data_export": true,
          "custom_reports": false,
          "predictive_analytics": false
        },
        "tournament_competition": {
          "tournament_registration": false,
          "live_tracking": false,
          "photo_verification": false,
          "scoring_ranking": false,
          "prize_management": false,
          "tournament_history": false
        }
      }
    },
    "fishingbooker": {
      "name": "FishingBooker",
      "users": "450K+ bookings/year",
      "revenue": "$27.9M",
      "pricing": "15-25% commission",
      "position": "Guide Booking Leader",
      "features": {
        "social_community": {
          "user_profiles": true,
          "photo_sharing": false,
          "community_forums": false,
          "friend_connections": false,
          "leaderboards": false,
          "direct_messaging": false,
          "group_management": false,
          "social_verification": false,
          "live_broadcasting": false,
          "catch_challenges": false,
          "user_ratings": true,
          "content_moderation": "partial"
        },
        "mapping_navigation": {
          "interactive_maps": "partial",
          "gps_navigation": false,
          "depth_charts": false,
          "offline_downloads": false,
          "custom_spots": false,
          "spot_sharing": false,
          "location_tracking": false,
          "map_layers": false,
          "satellite_imagery": false,
          "3d_visualization": false,
          "hazard_marking": false,
          "access_mapping": "partial",
          "route_planning": false,
          "carplay_integration": false
        },
        "ai_prediction": {
          "bite_forecasting": false,
          "species_identification": false,
          "catch_prediction": false,
          "pattern_recognition": false,
          "success_prediction": false,
          "timing_optimization": false,
          "water_clarity_prediction": false,
          "bait_recommendations": false,
          "individual_recognition": false,
          "ml_improvements": false
        },
        "weather_environmental": {
          "weather_data": "partial",
          "marine_forecasts": false,
          "water_temperature": false,
          "tide_charts": false,
          "barometric_pressure": false,
          "wind_data": false,
          "moon_phase": false,
          "seasonal_patterns": false,
          "water_levels": false,
          "flow_rates": false,
          "uv_index": false,
          "storm_tracking": false
        },
        "species_intelligence": {
          "species_database": "partial",
          "location_species": true,
          "migration_patterns": false,
          "size_tracking": false,
          "regulations_data": false,
          "stocking_info": false,
          "historical_data": false,
          "abundance_mapping": false,
          "spawning_periods": false,
          "feeding_insights": false,
          "size_distribution": false,
          "population_health": false,
          "invasive_alerts": false,
          "habitat_requirements": false
        },
        "gear_equipment": {
          "tackle_management": false,
          "gear_recommendations": false,
          "equipment_reviews": false,
          "marketplace": false,
          "gear_tracking": false,
          "performance_tracking": false,
          "maintenance_reminders": false,
          "comparison_tools": false,
          "price_tracking": false,
          "rental_integration": "partial"
        },
        "guide_booking": {
          "guide_directory": true,
          "booking_system": true,
          "payment_processing": true,
          "review_system": true,
          "trip_planning": true,
          "cancellation_management": true,
          "insurance_options": true,
          "multilingual_support": true
        },
        "private_access": {
          "land_listings": false,
          "access_booking": false,
          "property_verification": false,
          "fee_management": false,
          "landowner_communication": false,
          "amenity_details": false
        },
        "conservation_sustainability": {
          "catch_release_tracking": false,
          "conservation_projects": false,
          "cleanup_logging": false,
          "endangered_reporting": false,
          "research_sharing": false,
          "education_content": "partial",
          "pollution_reporting": false,
          "habitat_restoration": false
        },
        "safety_emergency": {
          "emergency_contacts": false,
          "location_sharing": false,
          "weather_alerts": "partial",
          "first_aid_info": true,
          "emergency_services": false,
          "trip_checkin": false,
          "equipment_safety": true,
          "hazard_reporting": false
        },
        "analytics_reporting": {
          "catch_statistics": false,
          "pattern_analysis": false,
          "success_metrics": false,
          "gear_effectiveness": false,
          "location_performance": false,
          "seasonal_trends": false,
          "goal_tracking": false,
          "data_export": false,
          "custom_reports": false,
          "predictive_analytics": false
        },
        "tournament_competition": {
          "tournament_registration": "partial",
          "live_tracking": false,
          "photo_verification": false,
          "scoring_ranking": false,
          "prize_management": false,
          "tournament_history": false
        }
      }
    }
  },
  "feature_categories": {
    "social_community": {
      "name": "Social & Community",
      "features": {
        "user_profiles": "User profiles and activity feeds",
        "photo_sharing": "Photo sharing and catch logs",
        "community_forums": "Community forums and discussions",
        "friend_connections": "Friend connections and following",
        "leaderboards": "Leaderboards and achievements",
        "direct_messaging": "Direct messaging and chat",
        "group_management": "Group creation and management",
        "social_verification": "Social catch verification",
        "live_broadcasting": "Live trip broadcasting",
        "catch_challenges": "Catch challenges and competitions",
        "user_ratings": "User ratings and reviews",
        "content_moderation": "Content moderation tools"
      }
    },
    "mapping_navigation": {
      "name": "Mapping & Navigation",
      "features": {
        "interactive_maps": "Interactive fishing maps",
        "gps_navigation": "GPS navigation and waypoints",
        "depth_charts": "Depth charts and bathymetry",
        "offline_downloads": "Offline map downloads",
        "custom_spots": "Custom spot marking",
        "spot_sharing": "Public vs private spot sharing",
        "location_tracking": "Real-time location tracking",
        "map_layers": "Map layering options",
        "satellite_imagery": "Satellite imagery overlay",
        "3d_visualization": "3D map visualization",
        "hazard_marking": "Hazard and safety marking",
        "access_mapping": "Access point mapping",
        "route_planning": "Route planning tools",
        "carplay_integration": "CarPlay/Android Auto integration"
      }
    },
    "ai_prediction": {
      "name": "AI & Prediction",
      "features": {
        "bite_forecasting": "Bite time forecasting",
        "species_identification": "Species identification via photo",
        "catch_prediction": "Catch prediction algorithms",
        "pattern_recognition": "Pattern recognition analysis",
        "success_prediction": "Success rate predictions",
        "timing_optimization": "Optimal timing suggestions",
        "water_clarity_prediction": "Water clarity predictions",
        "bait_recommendations": "Bait recommendation engine",
        "individual_recognition": "Individual fish recognition",
        "ml_improvements": "Machine learning improvements"
      }
    },
    "weather_environmental": {
      "name": "Weather & Environmental",
      "features": {
        "weather_data": "Real-time weather data",
        "marine_forecasts": "Marine/lake forecasts",
        "water_temperature": "Water temperature tracking",
        "tide_charts": "Tide charts and predictions",
        "barometric_pressure": "Barometric pressure data",
        "wind_data": "Wind speed and direction",
        "moon_phase": "Moon phase tracking",
        "seasonal_patterns": "Seasonal pattern analysis",
        "water_levels": "Water level monitoring",
        "flow_rates": "Flow rate data",
        "uv_index": "UV index information",
        "storm_tracking": "Storm tracking alerts"
      }
    },
    "species_intelligence": {
      "name": "Species & Location Intelligence",
      "features": {
        "species_database": "Fish species database",
        "location_species": "Location-specific species info",
        "migration_patterns": "Seasonal migration patterns",
        "size_tracking": "Size and weight tracking",
        "regulations_data": "Regulations and limits data",
        "stocking_info": "Stocking information",
        "historical_data": "Historical catch data",
        "abundance_mapping": "Species abundance mapping",
        "spawning_periods": "Spawning period information",
        "feeding_insights": "Feeding behavior insights",
        "size_distribution": "Size distribution analysis",
        "population_health": "Population health metrics",
        "invasive_alerts": "Invasive species alerts",
        "habitat_requirements": "Habitat requirement data"
      }
    },
    "gear_equipment": {
      "name": "Gear & Equipment",
      "features": {
        "tackle_management": "Tackle box management",
        "gear_recommendations": "Gear recommendations",
        "equipment_reviews": "Equipment reviews and ratings",
        "marketplace": "Marketplace integration",
        "gear_tracking": "Gear tracking and inventory",
        "performance_tracking": "Lure/bait performance tracking",
        "maintenance_reminders": "Equipment maintenance reminders",
        "comparison_tools": "Gear comparison tools",
        "price_tracking": "Price tracking and alerts",
        "rental_integration": "Rental equipment integration"
      }
    },
    "guide_booking": {
      "name": "Guide & Booking Services",
      "features": {
        "guide_directory": "Guide directory and search",
        "booking_system": "Online booking system",
        "payment_processing": "Payment processing",
        "review_system": "Review and rating system",
        "trip_planning": "Trip planning tools",
        "cancellation_management": "Cancellation management",
        "insurance_options": "Insurance options",
        "multilingual_support": "Multi-language support"
      }
    },
    "private_access": {
      "name": "Private Access",
      "features": {
        "land_listings": "Private land listings",
        "access_booking": "Access booking system",
        "property_verification": "Property verification",
        "fee_management": "Access fee management",
        "landowner_communication": "Landowner communication",
        "amenity_details": "Property amenity details"
      }
    },
    "conservation_sustainability": {
      "name": "Conservation & Sustainability",
      "features": {
        "catch_release_tracking": "Catch and release tracking",
        "conservation_projects": "Conservation project support",
        "cleanup_logging": "Trash cleanup logging",
        "endangered_reporting": "Endangered species reporting",
        "research_sharing": "Data sharing with researchers",
        "education_content": "Sustainable fishing education",
        "pollution_reporting": "Pollution reporting tools",
        "habitat_restoration": "Habitat restoration participation"
      }
    },
    "safety_emergency": {
      "name": "Safety & Emergency",
      "features": {
        "emergency_contacts": "Emergency contact system",
        "location_sharing": "Location sharing for safety",
        "weather_alerts": "Weather alerts and warnings",
        "first_aid_info": "First aid information",
        "emergency_services": "Emergency services integration",
        "trip_checkin": "Trip check-in/check-out",
        "equipment_safety": "Equipment safety reminders",
        "hazard_reporting": "Hazard reporting system"
      }
    },
    "analytics_reporting": {
      "name": "Analytics & Reporting",
      "features": {
        "catch_statistics": "Personal catch statistics",
        "pattern_analysis": "Pattern analysis tools",
        "success_metrics": "Trip success metrics",
        "gear_effectiveness": "Gear effectiveness analysis",
        "location_performance": "Location performance tracking",
        "seasonal_trends": "Seasonal trend analysis",
        "goal_tracking": "Goal setting and tracking",
        "data_export": "Export data functionality",
        "custom_reports": "Custom report generation",
        "predictive_analytics": "Predictive analytics"
      }
    },
    "tournament_competition": {
      "name": "Tournament & Competition",
      "features": {
        "tournament_registration": "Tournament registration",
        "live_tracking": "Live tournament tracking",
        "photo_verification": "Photo verification system",
        "scoring_ranking": "Scoring and ranking",
        "prize_management": "Prize management",
        "tournament_history": "Tournament history tracking"
      }
    }
  }
};

// Load data from localStorage if available
let competitorData = JSON.parse(localStorage.getItem('competitorData')) || defaultData;

function saveData() {
  localStorage.setItem('competitorData', JSON.stringify(competitorData));
}

function saveInsightTitles() {
  localStorage.setItem('insightTitles', JSON.stringify(insightTitles));
}

// Save strategic insight bullets
function saveInsightBullets() {
  localStorage.setItem('insightBullets', JSON.stringify(insightBullets));
}

// DOM elements
let matrixBody;
let categoryScores;
let filterButtons;
let editToggleBtns;

// Strategic insight titles
const defaultInsightTitles = {
  insight1: 'Market Positioning Analysis',
  insight2: 'Key Integration Opportunities',
  insight3: 'Priority Features for New AI Platform',
  insight4: 'Technology Gap Analysis'
};
let insightTitles = JSON.parse(localStorage.getItem('insightTitles')) || defaultInsightTitles;

// Strategic insight bullets
let insightBullets = JSON.parse(localStorage.getItem('insightBullets')) || {};

// Edit mode state
let editMode = false;

// Current filter
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  matrixBody = document.getElementById('matrixBody');
  categoryScores = document.getElementById('categoryScores');
  filterButtons = document.querySelectorAll('.filter-btn');
  editToggleBtns = document.querySelectorAll('.edit-toggle');
  const insightHeaders = document.querySelectorAll('.strategic-insights .card h3');

  insightHeaders.forEach((h, idx) => {
    const id = `insight${idx + 1}`;
    h.dataset.insightId = id;
    if (insightTitles[id]) {
      h.textContent = insightTitles[id];
    }
  });

  // Initialize bullet data and load saved content
  const insightCards = document.querySelectorAll('.strategic-insights .card');
  insightCards.forEach(card => {
    const heading = card.querySelector('h3');
    if (!heading) return;
    const id = heading.dataset.insightId;
    const bullets = card.querySelectorAll('li');
    bullets.forEach((li, idx) => {
      li.dataset.insightId = id;
      li.dataset.bulletIndex = idx;
      if (insightBullets[id] && insightBullets[id][idx]) {
        li.innerHTML = insightBullets[id][idx];
      }
    });
  });

  if (editToggleBtns.length) {
    editToggleBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        editMode = !editMode;
        editToggleBtns.forEach(b => {
          b.textContent = editMode ? 'Exit Edit Mode' : 'Edit Mode';
        });
        renderFeatureMatrix();
        toggleInsightEditMode(editMode);
      });
    });
  }

  setupFilterButtons();
  renderFeatureMatrix();
  renderCategoryScores();
});

// Setup filter button functionality
function setupFilterButtons() {
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update current filter
      currentFilter = this.dataset.category;
      
      // Re-render matrix
      renderFeatureMatrix();
    });
  });
}

// Get status icon for feature availability
function getStatusIcon(status) {
  if (status === true) {
    return '<span class="status-icon status-full">✓</span>';
  } else if (status === 'premium' || status === 'partial') {
    return '<span class="status-icon status-partial">◐</span>';
  } else {
    return '<span class="status-icon status-none">✗</span>';
  }
}

// Render the feature comparison matrix
function renderFeatureMatrix() {
  if (!matrixBody) return;

  matrixBody.innerHTML = '';
  
  const categories = competitorData.feature_categories;
  const competitors = competitorData.competitors;

  Object.keys(categories).forEach(categoryKey => {
    // Skip category if filter is active and doesn't match
    if (currentFilter !== 'all' && currentFilter !== categoryKey) {
      return;
    }

    const category = categories[categoryKey];
    
    // Add category header row
    const categoryRow = document.createElement('div');
    categoryRow.className = 'matrix-row category-header';
    categoryRow.innerHTML = `
      <div class="feature-name">${category.name}</div>
      <div class="feature-status"></div>
      <div class="feature-status"></div>
      <div class="feature-status"></div>
    `;
    matrixBody.appendChild(categoryRow);

    // Add feature rows
    Object.keys(category.features).forEach(featureKey => {
      const featureRow = document.createElement('div');
      featureRow.className = 'matrix-row';

      const cell = (comp) => {
        const status = competitors[comp].features[categoryKey][featureKey];
        const editableClass = editMode ? ' editable' : '';
        return `<div class="feature-status${editableClass}" data-category="${categoryKey}" data-feature="${featureKey}" data-competitor="${comp}">${getStatusIcon(status)}</div>`;
      };

      const label = featureKey
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const description = category.features[featureKey];

      featureRow.innerHTML = `
        <div class="feature-name"><span class="feature-label">${label}</span><span class="feature-description">${description}</span></div>
        ${['fishbrain', 'infinite_outdoors', 'fishingbooker'].map(cell).join('')}
      `;
      matrixBody.appendChild(featureRow);
    });
  });
  if (editMode) attachCellHandlers();
}


// Calculate category scores
function calculateCategoryScore(categoryKey, competitorKey) {
  const features = competitorData.competitors[competitorKey].features[categoryKey];
  const totalFeatures = Object.keys(features).length;
  
  let score = 0;
  Object.values(features).forEach(value => {
    if (value === true) score += 1;
    else if (value === 'premium' || value === 'partial') score += 0.5;
  });
  
  return Math.round((score / totalFeatures) * 100);
}

// Render category scores
function renderCategoryScores() {
  if (!categoryScores) return;

  const categories = competitorData.feature_categories;
  const competitors = ['fishbrain', 'infinite_outdoors', 'fishingbooker'];

  Object.keys(categories).forEach(categoryKey => {
    const category = categories[categoryKey];
    
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'category-score';
    
    const scores = competitors.map(comp => calculateCategoryScore(categoryKey, comp));
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    
    let scoreClass = 'low';
    if (avgScore >= 70) scoreClass = 'high';
    else if (avgScore >= 40) scoreClass = 'medium';
    
    scoreDiv.innerHTML = `
      <span>${category.name}</span>
      <div class="score-bar">
        <div class="score-fill ${scoreClass}" style="width: ${avgScore}%"></div>
      </div>
      <span>${avgScore}%</span>
    `;
    
    categoryScores.appendChild(scoreDiv);
  });
}

// Handle cell click in edit mode
function attachCellHandlers() {
  const cells = document.querySelectorAll('.feature-status.editable');
  cells.forEach(cell => {
    cell.addEventListener('click', handleStatusCycle);
  });
}

function handleStatusCycle(event) {
  if (!editMode) return;
  const cell = event.currentTarget;
  const comp = cell.dataset.competitor;
  const category = cell.dataset.category;
  const feature = cell.dataset.feature;

  let current = competitorData.competitors[comp].features[category][feature];
  if (current === 'premium') current = 'partial';

  let next;
  if (current === true) next = 'partial';
  else if (current === 'partial') next = false;
  else next = true;

  competitorData.competitors[comp].features[category][feature] = next;
  saveData();
  renderFeatureMatrix();
}

function toggleInsightEditMode(enabled) {
  const insightHeaders = document.querySelectorAll('.strategic-insights .card h3');
  const insightBullets = document.querySelectorAll('.strategic-insights li');
  insightHeaders.forEach(h => {
    if (enabled) {
      h.classList.add('editable-heading');
      h.setAttribute('contenteditable', 'true');
      h.addEventListener('blur', handleInsightBlur);
      h.addEventListener('keydown', handleInsightKeydown);
    } else {
      h.classList.remove('editable-heading');
      h.removeAttribute('contenteditable');
      h.removeEventListener('blur', handleInsightBlur);
      h.removeEventListener('keydown', handleInsightKeydown);
    }
  });

  insightBullets.forEach(li => {
    if (enabled) {
      li.classList.add('editable-bullet');
      li.setAttribute('contenteditable', 'true');
      li.addEventListener('keydown', handleBulletKeydown);
      li.addEventListener('blur', handleBulletBlur);
    } else {
      li.classList.remove('editable-bullet');
      li.removeAttribute('contenteditable');
      li.removeEventListener('keydown', handleBulletKeydown);
      li.removeEventListener('blur', handleBulletBlur);
    }
  });
}

function handleInsightBlur(e) {
  const id = e.target.dataset.insightId;
  insightTitles[id] = e.target.textContent.trim();
  saveInsightTitles();
}

function handleInsightKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    e.target.blur();
  }
}

function handleBulletKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    e.target.blur();
  }
}

function handleBulletBlur(e) {
  const insightId = e.target.dataset.insightId;
  const bulletIndex = e.target.dataset.bulletIndex;
  if (!insightBullets[insightId]) insightBullets[insightId] = [];
  insightBullets[insightId][bulletIndex] = e.target.innerHTML.trim();
  saveInsightBullets();
}
