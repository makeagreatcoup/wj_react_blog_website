import Link from "next/link";
import React from "react";
import Image from "next/image";

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  const items = [
    {
      id: "1",
      type: "food",
      url: "/food.png",
      title: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡",
      body: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡你擦了",
      name: "张三",
      time: "2023-1-1",
    },
    {
      id: "2",
      type: "food",
      url: "/food.png",
      title: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡",
      body: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡你擦了",
      name: "张三",
      time: "2023-1-1",
    },
    {
      id: "3",
      type: "food",
      url: "/food.png",
      title: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡",
      body: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡你擦了",
      name: "张三",
      time: "2023-1-1",
    },
    {
      id: "4",
      type: "food",
      url: "/food.png",
      title: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡",
      body: "奥此乃可是你擦拭三年擦了看错你了卡三次暗藏拉开拿出来卡你擦了",
      name: "张三",
      time: "2023-1-1",
    },
  ];

  return (
    <div className="flex flex-col mt-4">
      {items?.map((item) => (
        <Link href="/" className="flex gap-2 items-center mt-4">
          {withImage && (
            <div className="flex-1 relative aspect-square">
              <Image
                src={item.url}
                alt=""
                fill
                className=" object-cover rounded-full"
              />
            </div>
          )}
          <div className="flex-[4_1] flex flex-col gap-1">
            <span className="text-sm px-4 py-1 w-max rounded-2xl bg-red-300">
              {item.type}
            </span>
            <h3 className="text-sm font-medium softTextColor">
              {item.body}
            </h3>
            <div className="text-xs">
              <span>{item.name}</span>
              <span className="softTextColor"> - {item.time}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
