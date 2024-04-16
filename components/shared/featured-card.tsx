import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  tags: string[];
  price: number;
  onClickEvent: () => void;
  className?: string;
  imageClassName?: string;
}
const fallbackImage =
  "//images.unsplash.com/photo-1569982175971-d92b01cf8694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGllbnR8ZW58MHx8MHx8fDI%3D";

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title = "",
  description = "",
  imageUrl = fallbackImage,
  altText = "",
  tags = [""],
  price,
  onClickEvent,
  className,
  imageClassName,
  ...props
}) => {
  return (
    <Card className="rounded-3xl w-80 h-[420px] p-0 mx-auto">
      <CardContent className="h-full min-h-fit w-full p-0">
        <div className="h-[46%] w-full relative">
          <Image
            src={imageUrl}
            alt="Product"
            fill
            priority
            className="rounded-t-3xl object-center"
          />
        </div>
        <div className="min-h-fit">
          <h2 className="my-2 text-center text-2xl font-semibold">{title}</h2>
          <div className="w-full flex flex-wrap items-center justify-center gap-2 px-4 pb-2">
            {tags.map((item, index) => {
              return (
                <div key={index} className="text-sm text-gray-600 font-medium px-2 py-1 border rounded-full">
                  <span>{item}</span>
                </div>
              );
            })}

            <p className="text-sm text-justify text-muted-foreground">
              {description}
            </p>
            <div className="w-full flex items-center justify-between">
              <h5 className="text-lg text-amber-400 font-semibold">
                {" "}
                <span className="text-sm text-muted-foreground mr-1">
                  starting at
                </span>
                ₹{price}
              </h5>
              <Button
              onClick={onClickEvent}
                className="relative rounded-full text-black hover:text-black bg-amber-400 overflow-hidden z-[1] transition-all duration-300 ease-linear before:content-[''] before:absolute before:inset-0 before:w-0 before:transition-all before:duration-300 before:ease-linear hover:before:w-full before:bg-amber-500 before:rounded-full before:z-[-1]"
                variant="outline"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
