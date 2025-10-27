
export interface Product {
  nombre: string;
  categoria: string;
  precio: string;
  img: string;
}

export type MessageSender = 'user' | 'bot' | 'loading';

export interface Message {
  id: string;
  sender: MessageSender;
  text: string;
}
