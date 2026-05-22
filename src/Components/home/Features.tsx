import FeatureCard from "./FeatureCard";
import { Truck, ShieldCheck, ThumbsUp, Headset } from 'lucide-react';
const Features = () => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 py-8 border-t border-b border-gray-50">
            <FeatureCard 
            icon={<Truck size={24} />} 
            title="Quick Delivery" 
            description="Orders over $50" 
            />
            <FeatureCard 
            icon={<ShieldCheck size={24} />} 
            title="Secure Payment" 
            description="100% secure payment" 
            />
            <FeatureCard 
            icon={<ThumbsUp size={24} />} 
            title="Best Quality" 
            description="Original products" 
            />
            <FeatureCard 
            icon={<Headset size={24} />} 
            title="Return Guarantee" 
            description="Within 30 days" 
            />
        </div>
    );
}
export default Features;