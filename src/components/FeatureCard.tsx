import React from "react";
import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) =>
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="bg-gold-500/10 p-2 rounded-full">
        <Check className="h-5 w-5 text-gold-500" />
      </div>
      <h3 className="text-xl font-bold">
        {title}
      </h3>
    </div>
    <p className="text-muted-foreground pl-10">
      {description}
    </p>
  </div>;

export default FeatureCard;
