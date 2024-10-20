import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Coins, LandPlot, Gift } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      title: "Maximize Yields",
      description: "Stake your asset with Stakk Finance and watch your rewards grow. Earn competitive yields from cutting-edge DeFi integrations.",
      icon: Coins,
    },
    {
      title: "Participate in DAOs",
      description: "Join decentralized governance and vote on key blockchain proposals. Shape the future by having a say in DAOs.",
      icon: LandPlot,
    },
    {
      title: "Farm Airdrops",
      description: "Farm rewards from ecosystem airdrops effortlessly. By staking with Stakk, you're automatically eligible for exclusive partner airdrops.",
      icon: Gift,
    },
  ];

  return (
    <section className="bg-[#1C1C1C] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Key Features of Stakk Finance
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-[#4169E1]  rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
  
}
