export type ApiError = {
  code: string;
  message: string;
  data: {
    status: number;
  };
};

export type Thread = {
  id: 15;
  date: Date;
  date_gmt: Date;
  guid: {
    rendered: string;
  };
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  template: string;
  thread_references: number[];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    'wp:featuredmedia': [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    'wp:attachment': [
      {
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
};

export type ThreadResponse = Thread | ApiError;

export type Post = {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: {
    rendered: string;
  };
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  thread_references: number[];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    replies: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    'version-history': [
      {
        count: number;
        href: string;
      }
    ];
    'predecessor-version': [
      {
        id: number;
        href: string;
      }
    ];
    'wp:attachment': [
      {
        href: string;
      }
    ];
    'wp:term': [
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      },
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      },
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
};
