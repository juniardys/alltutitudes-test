import { IUserAccount } from "@/interfaces/account";
import { INewsletterItem } from "@/interfaces/newsletter";

export function getNewsletterItems(): INewsletterItem[] {
  return [
    {
      id: 1,
      title: "New sale and discount notifications",
      description:
        "You will get notified when we have a new sale and discount to your email",
      subscribed: true,
    },
    {
      id: 2,
      title: "New features",
      description:
        "You will get notified when we have a new features to your email",
      subscribed: false,
    },
    {
      id: 3,
      title: "New products",
      description:
        "You will get notified when we have a new products to your email",
      subscribed: false,
    },
    {
      id: 4,
      title: "Maintenance report",
      description:
        "You will get notified when we have a maintenance in our site to your email",
      subscribed: true,
    },
  ];
}

export function getAccountProfile(): IUserAccount {
  return {
    name: "Anonymous",
    email: "test@test.com",
  };
}
