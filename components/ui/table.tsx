import * as React from "react";

export function Table({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={
          "w-full caption-bottom text-sm border-separate border-spacing-0 " +
          (className ?? "")
        }
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={"[&_tr]:border-b bg-gray-50/60 " + (className ?? "")} {...props} />
  );
}

export function TableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={"[&_tr:last-child]:border-0 " + (className ?? "")} {...props} />
  );
}

export function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={"border-t transition-colors hover:bg-gray-50/70 " + (className ?? "")}
      {...props}
    />
  );
}

export function TableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={
        "h-10 px-4 text-left align-middle font-medium text-gray-700 " +
        (className ?? "")
      }
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={"p-4 align-middle text-gray-800 " + (className ?? "")}
      {...props}
    />
  );
}
