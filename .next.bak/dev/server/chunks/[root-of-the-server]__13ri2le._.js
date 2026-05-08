module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/auth/[...nextauth].js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__ = __turbopack_context__.i("[externals]/next-auth [external] (next-auth, cjs, [project]/node_modules/next-auth)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$next$2d$auth$2f$prisma$2d$adapter__$5b$external$5d$__$2840$next$2d$auth$2f$prisma$2d$adapter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$next$2d$auth$2f$prisma$2d$adapter$29$__ = __turbopack_context__.i("[externals]/@next-auth/prisma-adapter [external] (@next-auth/prisma-adapter, cjs, [project]/node_modules/@next-auth/prisma-adapter)");
(()=>{
    const e = new Error("Cannot find module '../../../prisma/generated/prisma-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$credentials__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$credentials$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__ = __turbopack_context__.i("[externals]/next-auth/providers/credentials [external] (next-auth/providers/credentials, cjs, [project]/node_modules/next-auth)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__ = __turbopack_context__.i("[externals]/bcryptjs [external] (bcryptjs, esm_import, [project]/node_modules/bcryptjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const prisma = new PrismaClient();
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["default"])({
    adapter: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$next$2d$auth$2f$prisma$2d$adapter__$5b$external$5d$__$2840$next$2d$auth$2f$prisma$2d$adapter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$next$2d$auth$2f$prisma$2d$adapter$29$__["PrismaAdapter"])(prisma),
    providers: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$credentials__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$credentials$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["default"])({
            name: 'Credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user) {
                    return null;
                }
                const isValid = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["default"].compare(credentials.password, user.passwordHash);
                if (!isValid) {
                    return null;
                }
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                };
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13ri2le._.js.map