import React, { Suspense } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "../../../lib/db";

// Used only for typing the table rows when Prisma types are not yet available.
// After updating schema + running prisma generate, these casts can be removed.


type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
};

function formatDate(date: Date) {

  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

function RoleBadge({ role }: { role: string }) {
  const isAdmin = role === "ADMIN";
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset " +
        (isAdmin
          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
          : "bg-sky-50 text-sky-700 ring-sky-200")
      }
    >
      {role}
    </span>
  );
}

function StatusBadge({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset " +
        (isActive
          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
          : "bg-rose-50 text-rose-700 ring-rose-200")
      }
    >
      {isActive ? "Aktif" : "Nonaktif"}
    </span>
  );
}

async function UsersTable() {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });

  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-white/60 px-6 py-14 text-center">
        <div className="text-4xl">👥</div>
        <h3 className="mt-3 text-base font-bold text-gray-900">Belum ada data pengguna</h3>
        <p className="mt-2 max-w-md text-sm text-gray-600">
          Saat ini database belum berisi pengguna terdaftar.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white/60">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-700">Nama</TableHead>
            <TableHead className="font-semibold text-gray-700">Email</TableHead>
            <TableHead className="font-semibold text-gray-700">Role</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
            <TableHead className="font-semibold text-gray-700">Tanggal Bergabung</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
{(users as unknown as UserRow[]).map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50/70">

              <TableCell className="font-medium text-gray-900">{user.name}</TableCell>
              <TableCell className="text-gray-600">{user.email}</TableCell>
              <TableCell>
                <RoleBadge role={user.role} />
              </TableCell>
              <TableCell>
                <StatusBadge isActive={user.isActive} />
              </TableCell>
              <TableCell className="text-gray-600">
                {formatDate(user.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function UsersLoadingTable() {
  return (
    <div className="rounded-xl border bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-64 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="h-9 w-32 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border">
        <div className="grid grid-cols-5 gap-0 bg-gray-50 p-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 w-full animate-pulse rounded bg-gray-200" />
          ))}
        </div>
        {Array.from({ length: 6 }).map((_, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-5 gap-0 border-t p-3">
            {Array.from({ length: 5 }).map((__, colIdx) => (
              <div
                key={colIdx}
                className="h-4 w-full animate-pulse rounded bg-gray-200"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UsersAdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Manajemen Pengguna</h1>
        <p className="text-sm text-gray-600">
          Daftar pengguna terdaftar pada platform Edukasi Kebencanaan.
        </p>
      </div>

      <div className="mt-6 grid gap-6">
        <Suspense fallback={<UsersLoadingTable />}>
          <UsersTable />
        </Suspense>
      </div>
    </div>
  );
}

