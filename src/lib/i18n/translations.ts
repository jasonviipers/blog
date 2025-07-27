import type { Locale } from "./config"

export interface Translations {
    // Navigation
    nav: {
        home: string
        products: string
        pricing: string
        about: string
        blog: string
        search: string
        signIn: string
        upgrade: string
    }

    // Hero section
    hero: {
        title: string
        subtitle: string
        description: string
        keywords: string[]
        author: string
    }

    // Blog
    blog: {
        recentWritings: string
        readMore: string
        back: string
        publishedOn: string
        readingTime: string
        minutes: string
        tags: string
        relatedPosts: string
        sharePost: string
        copyLink: string
        linkCopied: string
    }

    // Search
    search: {
        placeholder: string
        noResults: string
        results: string
        navigate: string
        select: string
        close: string
        searchesLeft: string
        limitReached: string
        upgradeForUnlimited: string
    }

    // AI Chat
    chat: {
        title: string
        placeholder: string
        online: string
        thinking: string
        dailyLimit: string
        limitReached: string
        messagesRemaining: string
        upgradeForUnlimited: string
        voiceSettings: string
        contactForm: string
        clearChat: string
        listening: string
        stopListening: string
        startVoiceInput: string
        networkError: string
        microphoneError: string
        retry: string
        autoPlay: string
        speed: string
        pitch: string
        volume: string
        testVoice: string
        saveSettings: string
        cancel: string
    }

    // Authentication
    auth: {
        signIn: string
        signUp: string
        createAccount: string
        email: string
        password: string
        name: string
        forgotPassword: string
        dontHaveAccount: string
        alreadyHaveAccount: string
        invalidCredentials: string
        signOut: string
        accountSettings: string
        demoAccounts: string
    }

    // Subscription
    subscription: {
        choosePlan: string
        unlockPremium: string
        currentPlan: string
        upgrade: string
        freePlan: string
        proPlan: string
        premiumPlan: string
        mostPopular: string
        freeForever: string
        subscribeTo: string
        getPlan: string
        monthlyBilling: string
        yearlyBilling: string
        save: string
        features: string
        moneyBackGuarantee: string
        cancelAnytime: string
        securePayment: string
    }

    // Pricing features
    features: {
        publicPosts: string
        basicSearch: string
        aiChat: string
        communityAccess: string
        premiumPosts: string
        unlimitedAiChat: string
        advancedSearch: string
        codeTemplates: string
        prioritySupport: string
        adFree: string
        downloadAccess: string
        mentoringSessions: string
        exclusiveVideo: string
        sourceCodeAccess: string
        privateDiscord: string
        monthlyQA: string
        earlyAccess: string
        customReviews: string
    }

    // Contact
    contact: {
        title: string
        subject: string
        message: string
        sendMessage: string
        sending: string
        messageSent: string
        thankYou: string
        backToChat: string
        allFieldsRequired: string
    }

    // Products
    products: {
        title: string
        description: string
        recommendedTools: string
        affiliateLinks: string
        digitalProducts: string
        purchaseNow: string
        downloadNow: string
        features: string
        rating: string
        reviews: string
    }

    // Checkout
    checkout: {
        title: string
        subtitle: string
        orderSummary: string
        paymentDetails: string
        creditCard: string
        paypal: string
        cardNumber: string
        expiryDate: string
        cvv: string
        cardholderName: string
        country: string
        total: string
        tax: string
        processing: string
        completePurchase: string
        secureEncryption: string
        trustIndicators: string
    }

    // Success
    success: {
        title: string
        description: string
        whatsNext: string
        downloadNow: string
        continueReading: string
        confirmationSent: string
        checkInbox: string
    }

    // Errors
    errors: {
        pageNotFound: string
        somethingWentWrong: string
        tryAgain: string
        goHome: string
        networkError: string
        serverError: string
        unauthorized: string
        forbidden: string
        tooManyRequests: string
    }

    // Loading
    loading: {
        loading: string
        preparing: string
        processing: string
        almostReady: string
        pleaseWait: string
    }

    // Common
    common: {
        yes: string
        no: string
        ok: string
        cancel: string
        save: string
        delete: string
        edit: string
        view: string
        download: string
        share: string
        copy: string
        copied: string
        more: string
        less: string
        showMore: string
        showLess: string
        previous: string
        next: string
        page: string
        of: string
        and: string
        or: string
        all: string
        none: string
        optional: string
        required: string
    }

    // Time
    time: {
        now: string
        today: string
        yesterday: string
        tomorrow: string
        thisWeek: string
        lastWeek: string
        thisMonth: string
        lastMonth: string
        thisYear: string
        lastYear: string
        ago: string
        in: string
        seconds: string
        minutes: string
        hours: string
        days: string
        weeks: string
        months: string
        years: string
    }
}

export const translations: Record<Locale, Translations> = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            pricing: "Pricing",
            about: "About",
            blog: "Blog",
            search: "Search",
            signIn: "Sign In",
            upgrade: "Upgrade",
        },
        hero: {
            title: "Journey of Development",
            subtitle: "Zen Development",
            description:
                "Documenting the path of continuous learning, one line of code at a time. A minimalist space for thoughts on technology, design, and craftsmanship.",
            author: "Jason Viipers",
            keywords: ["development", "programming", "technology", "design", "craftsmanship", "coding", "software", "web development", "minimalism", "zen"]
        },
        blog: {
            recentWritings: "Recent Writings",
            readMore: "Read more",
            back: "Back",
            publishedOn: "Published on",
            readingTime: "Reading time",
            minutes: "minutes",
            tags: "Tags",
            relatedPosts: "Related Posts",
            sharePost: "Share Post",
            copyLink: "Copy Link",
            linkCopied: "Link Copied!",
        },
        search: {
            placeholder: "Search posts...",
            noResults: "No posts found for",
            results: "results",
            navigate: "↑↓ Navigate",
            select: "↵ Select",
            close: "Esc Close",
            searchesLeft: "searches left",
            limitReached: "Search limit reached for today",
            upgradeForUnlimited: "Upgrade for unlimited search access",
        },
        chat: {
            title: "AI Assistant",
            placeholder: "Ask me anything...",
            online: "Online",
            thinking: "Thinking...",
            dailyLimit: "Daily Chat Limit Reached",
            limitReached: "You've used all free messages today",
            messagesRemaining: "messages remaining today",
            upgradeForUnlimited: "Upgrade for unlimited chat",
            voiceSettings: "Voice settings",
            contactForm: "Contact form",
            clearChat: "Clear chat",
            listening: "Listening...",
            stopListening: "Stop listening",
            startVoiceInput: "Start voice input",
            networkError: "Network error during speech recognition",
            microphoneError: "Unable to access microphone",
            retry: "Try Again",
            autoPlay: "Auto-play AI responses",
            speed: "Speed",
            pitch: "Pitch",
            volume: "Volume",
            testVoice: "Test Voice",
            saveSettings: "Save Settings",
            cancel: "Cancel",
        },
        auth: {
            signIn: "Sign In",
            signUp: "Sign Up",
            createAccount: "Create Account",
            email: "Email",
            password: "Password",
            name: "Name",
            forgotPassword: "Forgot password?",
            dontHaveAccount: "Don't have an account? Sign up",
            alreadyHaveAccount: "Already have an account? Sign in",
            invalidCredentials: "Invalid email or password",
            signOut: "Sign Out",
            accountSettings: "Account Settings",
            demoAccounts: "Demo Accounts",
        },
        subscription: {
            choosePlan: "Choose Your Plan",
            unlockPremium: "Unlock premium content and features",
            currentPlan: "Current Plan",
            upgrade: "Upgrade",
            freePlan: "Free",
            proPlan: "Pro",
            premiumPlan: "Premium",
            mostPopular: "Most Popular",
            freeForever: "Free Forever",
            subscribeTo: "Subscribe to",
            getPlan: "Get",
            monthlyBilling: "Monthly",
            yearlyBilling: "Yearly",
            save: "Save",
            features: "Features",
            moneyBackGuarantee: "30-day money-back guarantee",
            cancelAnytime: "Cancel anytime",
            securePayment: "Secure payment",
        },
        features: {
            publicPosts: "Access to public posts",
            basicSearch: "Basic search functionality",
            aiChat: "AI chat",
            communityAccess: "Community access",
            premiumPosts: "Premium posts & tutorials",
            unlimitedAiChat: "Unlimited AI chat",
            advancedSearch: "Advanced search functionality",
            codeTemplates: "Code templates & snippets",
            prioritySupport: "Priority support",
            adFree: "Ad-free experience",
            downloadAccess: "Download access",
            mentoringSessions: "1-on-1 mentoring sessions",
            exclusiveVideo: "Exclusive video content",
            sourceCodeAccess: "Source code access",
            privateDiscord: "Private Discord community",
            monthlyQA: "Monthly Q&A sessions",
            earlyAccess: "Early access to new content",
            customReviews: "Custom code reviews",
        },
        contact: {
            title: "Contact",
            subject: "Subject",
            message: "Message",
            sendMessage: "Send Message",
            sending: "Sending...",
            messageSent: "Message Sent!",
            thankYou: "Thank you for reaching out. I'll get back to you soon.",
            backToChat: "Back to Chat",
            allFieldsRequired: "All fields are required",
        },
        products: {
            title: "Products & Resources",
            description: "Digital products, courses, and recommended tools for developers",
            recommendedTools: "Recommended Tools",
            affiliateLinks: "Affiliate Links",
            digitalProducts: "Digital Products",
            purchaseNow: "Purchase Now",
            downloadNow: "Download Now",
            features: "Features",
            rating: "Rating",
            reviews: "reviews",
        },
        checkout: {
            title: "Complete Your Purchase",
            subtitle: "You're one step away from unlocking premium content",
            orderSummary: "Order Summary",
            paymentDetails: "Payment Details",
            creditCard: "Credit Card",
            paypal: "PayPal",
            cardNumber: "Card Number",
            expiryDate: "Expiry Date",
            cvv: "CVV",
            cardholderName: "Cardholder Name",
            country: "Country",
            total: "Total",
            tax: "Tax",
            processing: "Processing Payment",
            completePurchase: "Complete Purchase",
            secureEncryption: "Secure 256-bit SSL encryption",
            trustIndicators: "30-day money-back guarantee",
        },
        success: {
            title: "Purchase Successful!",
            description: "Thank you for your purchase",
            whatsNext: "What's Next:",
            downloadNow: "Download Now",
            continueReading: "Continue Reading",
            confirmationSent: "Confirmation Email Sent",
            checkInbox: "Check your inbox for purchase details and access instructions",
        },
        errors: {
            pageNotFound: "Page Not Found",
            somethingWentWrong: "Something went wrong",
            tryAgain: "Try Again",
            goHome: "Go Home",
            networkError: "Network Error",
            serverError: "Server Error",
            unauthorized: "Unauthorized",
            forbidden: "Forbidden",
            tooManyRequests: "Too Many Requests",
        },
        loading: {
            loading: "Loading...",
            preparing: "Preparing your zen experience",
            processing: "Processing...",
            almostReady: "Almost ready...",
            pleaseWait: "Please wait",
        },
        common: {
            yes: "Yes",
            no: "No",
            ok: "OK",
            cancel: "Cancel",
            save: "Save",
            delete: "Delete",
            edit: "Edit",
            view: "View",
            download: "Download",
            share: "Share",
            copy: "Copy",
            copied: "Copied!",
            more: "More",
            less: "Less",
            showMore: "Show More",
            showLess: "Show Less",
            previous: "Previous",
            next: "Next",
            page: "Page",
            of: "of",
            and: "and",
            or: "or",
            all: "All",
            none: "None",
            optional: "Optional",
            required: "Required",
        },
        time: {
            now: "now",
            today: "today",
            yesterday: "yesterday",
            tomorrow: "tomorrow",
            thisWeek: "this week",
            lastWeek: "last week",
            thisMonth: "this month",
            lastMonth: "last month",
            thisYear: "this year",
            lastYear: "last year",
            ago: "ago",
            in: "in",
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            weeks: "weeks",
            months: "months",
            years: "years",
        },
    },

    es: {
        nav: {
            home: "Inicio",
            products: "Productos",
            pricing: "Precios",
            about: "Acerca de",
            blog: "Blog",
            search: "Buscar",
            signIn: "Iniciar Sesión",
            upgrade: "Actualizar",
        },
        hero: {
            title: "Viaje del Desarrollo",
            subtitle: "Desarrollo Zen",
            description:
                "Documentando el camino del aprendizaje continuo, una línea de código a la vez. Un espacio minimalista para pensamientos sobre tecnología, diseño y artesanía.",
            author: "Jason Viipers",
            keywords: ["desarrollo", "programación", "tecnología", "diseño", "artesanía", "codificación", "software", "desarrollo web", "minimalismo", "zen"]
        },
        blog: {
            recentWritings: "Escritos Recientes",
            readMore: "Leer más",
            back: "Atrás",
            publishedOn: "Publicado el",
            readingTime: "Tiempo de lectura",
            minutes: "minutos",
            tags: "Etiquetas",
            relatedPosts: "Posts Relacionados",
            sharePost: "Compartir Post",
            copyLink: "Copiar Enlace",
            linkCopied: "¡Enlace Copiado!",
        },
        search: {
            placeholder: "Buscar posts...",
            noResults: "No se encontraron posts para",
            results: "resultados",
            navigate: "↑↓ Navegar",
            select: "↵ Seleccionar",
            close: "Esc Cerrar",
            searchesLeft: "búsquedas restantes",
            limitReached: "Límite de búsqueda alcanzado por hoy",
            upgradeForUnlimited: "Actualiza para búsqueda ilimitada",
        },
        chat: {
            title: "Asistente IA",
            placeholder: "Pregúntame cualquier cosa...",
            online: "En línea",
            thinking: "Pensando...",
            dailyLimit: "Límite Diario de Chat Alcanzado",
            limitReached: "Has usado todos los mensajes gratuitos de hoy",
            messagesRemaining: "mensajes restantes hoy",
            upgradeForUnlimited: "Actualiza para chat ilimitado",
            voiceSettings: "Configuración de voz",
            contactForm: "Formulario de contacto",
            clearChat: "Limpiar chat",
            listening: "Escuchando...",
            stopListening: "Dejar de escuchar",
            startVoiceInput: "Iniciar entrada de voz",
            networkError: "Error de red durante reconocimiento de voz",
            microphoneError: "No se puede acceder al micrófono",
            retry: "Intentar de Nuevo",
            autoPlay: "Reproducir automáticamente respuestas IA",
            speed: "Velocidad",
            pitch: "Tono",
            volume: "Volumen",
            testVoice: "Probar Voz",
            saveSettings: "Guardar Configuración",
            cancel: "Cancelar",
        },
        auth: {
            signIn: "Iniciar Sesión",
            signUp: "Registrarse",
            createAccount: "Crear Cuenta",
            email: "Correo",
            password: "Contraseña",
            name: "Nombre",
            forgotPassword: "¿Olvidaste tu contraseña?",
            dontHaveAccount: "¿No tienes cuenta? Regístrate",
            alreadyHaveAccount: "¿Ya tienes cuenta? Inicia sesión",
            invalidCredentials: "Correo o contraseña inválidos",
            signOut: "Cerrar Sesión",
            accountSettings: "Configuración de Cuenta",
            demoAccounts: "Cuentas Demo",
        },
        subscription: {
            choosePlan: "Elige Tu Plan",
            unlockPremium: "Desbloquea contenido y funciones premium",
            currentPlan: "Plan Actual",
            upgrade: "Actualizar",
            freePlan: "Gratis",
            proPlan: "Pro",
            premiumPlan: "Premium",
            mostPopular: "Más Popular",
            freeForever: "Gratis Para Siempre",
            subscribeTo: "Suscribirse a",
            getPlan: "Obtener",
            monthlyBilling: "Mensual",
            yearlyBilling: "Anual",
            save: "Ahorrar",
            features: "Características",
            moneyBackGuarantee: "Garantía de devolución de 30 días",
            cancelAnytime: "Cancela en cualquier momento",
            securePayment: "Pago seguro",
        },
        features: {
            publicPosts: "Acceso a posts públicos",
            basicSearch: "Funcionalidad de búsqueda básica",
            aiChat: "Chat IA",
            communityAccess: "Acceso a la comunidad",
            premiumPosts: "Posts y tutoriales premium",
            unlimitedAiChat: "Chat IA ilimitado",
            advancedSearch: "Funcionalidad de búsqueda avanzada",
            codeTemplates: "Plantillas y fragmentos de código",
            prioritySupport: "Soporte prioritario",
            adFree: "Experiencia sin anuncios",
            downloadAccess: "Acceso a descargas",
            mentoringSessions: "Sesiones de mentoría 1-a-1",
            exclusiveVideo: "Contenido de video exclusivo",
            sourceCodeAccess: "Acceso al código fuente",
            privateDiscord: "Comunidad privada de Discord",
            monthlyQA: "Sesiones mensuales de Q&A",
            earlyAccess: "Acceso temprano a nuevo contenido",
            customReviews: "Revisiones de código personalizadas",
        },
        contact: {
            title: "Contacto",
            subject: "Asunto",
            message: "Mensaje",
            sendMessage: "Enviar Mensaje",
            sending: "Enviando...",
            messageSent: "¡Mensaje Enviado!",
            thankYou: "Gracias por contactarnos. Te responderé pronto.",
            backToChat: "Volver al Chat",
            allFieldsRequired: "Todos los campos son obligatorios",
        },
        products: {
            title: "Productos y Recursos",
            description: "Productos digitales, cursos y herramientas recomendadas para desarrolladores",
            recommendedTools: "Herramientas Recomendadas",
            affiliateLinks: "Enlaces de Afiliados",
            digitalProducts: "Productos Digitales",
            purchaseNow: "Comprar Ahora",
            downloadNow: "Descargar Ahora",
            features: "Características",
            rating: "Calificación",
            reviews: "reseñas",
        },
        checkout: {
            title: "Completa Tu Compra",
            subtitle: "Estás a un paso de desbloquear contenido premium",
            orderSummary: "Resumen del Pedido",
            paymentDetails: "Detalles de Pago",
            creditCard: "Tarjeta de Crédito",
            paypal: "PayPal",
            cardNumber: "Número de Tarjeta",
            expiryDate: "Fecha de Vencimiento",
            cvv: "CVV",
            cardholderName: "Nombre del Titular",
            country: "País",
            total: "Total",
            tax: "Impuesto",
            processing: "Procesando Pago",
            completePurchase: "Completar Compra",
            secureEncryption: "Encriptación SSL segura de 256 bits",
            trustIndicators: "Garantía de devolución de 30 días",
        },
        success: {
            title: "¡Compra Exitosa!",
            description: "Gracias por tu compra",
            whatsNext: "Qué Sigue:",
            downloadNow: "Descargar Ahora",
            continueReading: "Continuar Leyendo",
            confirmationSent: "Email de Confirmación Enviado",
            checkInbox: "Revisa tu bandeja de entrada para detalles de compra e instrucciones de acceso",
        },
        errors: {
            pageNotFound: "Página No Encontrada",
            somethingWentWrong: "Algo salió mal",
            tryAgain: "Intentar de Nuevo",
            goHome: "Ir al Inicio",
            networkError: "Error de Red",
            serverError: "Error del Servidor",
            unauthorized: "No Autorizado",
            forbidden: "Prohibido",
            tooManyRequests: "Demasiadas Solicitudes",
        },
        loading: {
            loading: "Cargando...",
            preparing: "Preparando tu experiencia zen",
            processing: "Procesando...",
            almostReady: "Casi listo...",
            pleaseWait: "Por favor espera",
        },
        common: {
            yes: "Sí",
            no: "No",
            ok: "OK",
            cancel: "Cancelar",
            save: "Guardar",
            delete: "Eliminar",
            edit: "Editar",
            view: "Ver",
            download: "Descargar",
            share: "Compartir",
            copy: "Copiar",
            copied: "¡Copiado!",
            more: "Más",
            less: "Menos",
            showMore: "Mostrar Más",
            showLess: "Mostrar Menos",
            previous: "Anterior",
            next: "Siguiente",
            page: "Página",
            of: "de",
            and: "y",
            or: "o",
            all: "Todo",
            none: "Ninguno",
            optional: "Opcional",
            required: "Requerido",
        },
        time: {
            now: "ahora",
            today: "hoy",
            yesterday: "ayer",
            tomorrow: "mañana",
            thisWeek: "esta semana",
            lastWeek: "la semana pasada",
            thisMonth: "este mes",
            lastMonth: "el mes pasado",
            thisYear: "este año",
            lastYear: "el año pasado",
            ago: "hace",
            in: "en",
            seconds: "segundos",
            minutes: "minutos",
            hours: "horas",
            days: "días",
            weeks: "semanas",
            months: "meses",
            years: "años",
        },
    },

    fr: {
        nav: {
            home: "Accueil",
            products: "Produits",
            pricing: "Tarifs",
            about: "À propos",
            blog: "Blog",
            search: "Rechercher",
            signIn: "Se connecter",
            upgrade: "Mettre à niveau",
        },
        hero: {
            title: "Voyage du Développement",
            subtitle: "Développement Zen",
            description:
                "Documenter le chemin de l'apprentissage continu, une ligne de code à la fois. Un espace minimaliste pour les réflexions sur la technologie, le design et l'artisanat.",
            author: "Jason Viipers",
            keywords: ["développement", "programmation", "technologie", "design", "artisanat", "codage", "logiciel", "développement web", "minimalisme", "zen"]
        },
        blog: {
            recentWritings: "Écrits Récents",
            readMore: "Lire plus",
            back: "Retour",
            publishedOn: "Publié le",
            readingTime: "Temps de lecture",
            minutes: "minutes",
            tags: "Tags",
            relatedPosts: "Articles Connexes",
            sharePost: "Partager l'Article",
            copyLink: "Copier le Lien",
            linkCopied: "Lien Copié !",
        },
        search: {
            placeholder: "Rechercher des articles...",
            noResults: "Aucun article trouvé pour",
            results: "résultats",
            navigate: "↑↓ Naviguer",
            select: "↵ Sélectionner",
            close: "Échap Fermer",
            searchesLeft: "recherches restantes",
            limitReached: "Limite de recherche atteinte pour aujourd'hui",
            upgradeForUnlimited: "Mettre à niveau pour un accès illimité aux recherches",
        },
        chat: {
            title: "Assistant IA",
            placeholder: "Demandez-moi n'importe quoi...",
            online: "En ligne",
            thinking: "Je réfléchis...",
            dailyLimit: "Limite Quotidienne de Chat Atteinte",
            limitReached: "Vous avez utilisé tous les messages gratuits aujourd'hui",
            messagesRemaining: "messages restants aujourd'hui",
            upgradeForUnlimited: "Mettre à niveau pour un chat illimité",
            voiceSettings: "Paramètres vocaux",
            contactForm: "Formulaire de contact",
            clearChat: "Effacer le chat",
            listening: "Écoute...",
            stopListening: "Arrêter d'écouter",
            startVoiceInput: "Démarrer l'entrée vocale",
            networkError: "Erreur réseau lors de la reconnaissance vocale",
            microphoneError: "Impossible d'accéder au microphone",
            retry: "Réessayer",
            autoPlay: "Lecture automatique des réponses IA",
            speed: "Vitesse",
            pitch: "Hauteur",
            volume: "Volume",
            testVoice: "Tester la Voix",
            saveSettings: "Sauvegarder les Paramètres",
            cancel: "Annuler",
        },
        auth: {
            signIn: "Se connecter",
            signUp: "S'inscrire",
            createAccount: "Créer un Compte",
            email: "Email",
            password: "Mot de passe",
            name: "Nom",
            forgotPassword: "Mot de passe oublié ?",
            dontHaveAccount: "Pas de compte ? Inscrivez-vous",
            alreadyHaveAccount: "Déjà un compte ? Connectez-vous",
            invalidCredentials: "Email ou mot de passe invalide",
            signOut: "Se déconnecter",
            accountSettings: "Paramètres du Compte",
            demoAccounts: "Comptes de Démonstration",
        },
        subscription: {
            choosePlan: "Choisissez Votre Plan",
            unlockPremium: "Débloquez le contenu et les fonctionnalités premium",
            currentPlan: "Plan Actuel",
            upgrade: "Mettre à niveau",
            freePlan: "Gratuit",
            proPlan: "Pro",
            premiumPlan: "Premium",
            mostPopular: "Le Plus Populaire",
            freeForever: "Gratuit Pour Toujours",
            subscribeTo: "S'abonner à",
            getPlan: "Obtenir",
            monthlyBilling: "Mensuel",
            yearlyBilling: "Annuel",
            save: "Économiser",
            features: "Fonctionnalités",
            moneyBackGuarantee: "Garantie de remboursement de 30 jours",
            cancelAnytime: "Annuler à tout moment",
            securePayment: "Paiement sécurisé",
        },
        features: {
            publicPosts: "Accès aux articles publics",
            basicSearch: "Fonctionnalité de recherche de base",
            aiChat: "Chat IA",
            communityAccess: "Accès à la communauté",
            premiumPosts: "Articles et tutoriels premium",
            unlimitedAiChat: "Chat IA illimité",
            advancedSearch: "Fonctionnalité de recherche avancée",
            codeTemplates: "Modèles et extraits de code",
            prioritySupport: "Support prioritaire",
            adFree: "Expérience sans publicité",
            downloadAccess: "Accès aux téléchargements",
            mentoringSessions: "Sessions de mentorat 1-à-1",
            exclusiveVideo: "Contenu vidéo exclusif",
            sourceCodeAccess: "Accès au code source",
            privateDiscord: "Communauté Discord privée",
            monthlyQA: "Sessions Q&R mensuelles",
            earlyAccess: "Accès anticipé au nouveau contenu",
            customReviews: "Révisions de code personnalisées",
        },
        contact: {
            title: "Contact",
            subject: "Sujet",
            message: "Message",
            sendMessage: "Envoyer le Message",
            sending: "Envoi en cours...",
            messageSent: "Message Envoyé !",
            thankYou: "Merci de nous avoir contactés. Je vous répondrai bientôt.",
            backToChat: "Retour au Chat",
            allFieldsRequired: "Tous les champs sont obligatoires",
        },
        products: {
            title: "Produits et Ressources",
            description: "Produits numériques, cours et outils recommandés pour les développeurs",
            recommendedTools: "Outils Recommandés",
            affiliateLinks: "Liens d'Affiliation",
            digitalProducts: "Produits Numériques",
            purchaseNow: "Acheter Maintenant",
            downloadNow: "Télécharger Maintenant",
            features: "Fonctionnalités",
            rating: "Note",
            reviews: "avis",
        },
        checkout: {
            title: "Complétez Votre Achat",
            subtitle: "Vous êtes à un pas de débloquer le contenu premium",
            orderSummary: "Résumé de la Commande",
            paymentDetails: "Détails de Paiement",
            creditCard: "Carte de Crédit",
            paypal: "PayPal",
            cardNumber: "Numéro de Carte",
            expiryDate: "Date d'Expiration",
            cvv: "CVV",
            cardholderName: "Nom du Titulaire de la Carte",
            country: "Pays",
            total: "Total",
            tax: "Taxe",
            processing: "Traitement du Paiement",
            completePurchase: "Finaliser l'Achat",
            secureEncryption: "Chiffrement SSL sécurisé 256 bits",
            trustIndicators: "Garantie de remboursement de 30 jours",
        },
        success: {
            title: "Achat Réussi !",
            description: "Merci pour votre achat",
            whatsNext: "Et Maintenant :",
            downloadNow: "Télécharger Maintenant",
            continueReading: "Continuer la Lecture",
            confirmationSent: "Email de Confirmation Envoyé",
            checkInbox: "Vérifiez votre boîte de réception pour les détails d'achat et les instructions d'accès",
        },
        errors: {
            pageNotFound: "Page Non Trouvée",
            somethingWentWrong: "Quelque chose s'est mal passé",
            tryAgain: "Réessayer",
            goHome: "Aller à l'Accueil",
            networkError: "Erreur Réseau",
            serverError: "Erreur Serveur",
            unauthorized: "Non Autorisé",
            forbidden: "Interdit",
            tooManyRequests: "Trop de Requêtes",
        },
        loading: {
            loading: "Chargement...",
            preparing: "Préparation de votre expérience zen",
            processing: "Traitement...",
            almostReady: "Presque prêt...",
            pleaseWait: "Veuillez patienter",
        },
        common: {
            yes: "Oui",
            no: "Non",
            ok: "OK",
            cancel: "Annuler",
            save: "Sauvegarder",
            delete: "Supprimer",
            edit: "Modifier",
            view: "Voir",
            download: "Télécharger",
            share: "Partager",
            copy: "Copier",
            copied: "Copié !",
            more: "Plus",
            less: "Moins",
            showMore: "Afficher Plus",
            showLess: "Afficher Moins",
            previous: "Précédent",
            next: "Suivant",
            page: "Page",
            of: "de",
            and: "et",
            or: "ou",
            all: "Tout",
            none: "Aucun",
            optional: "Optionnel",
            required: "Requis",
        },
        time: {
            now: "maintenant",
            today: "aujourd'hui",
            yesterday: "hier",
            tomorrow: "demain",
            thisWeek: "cette semaine",
            lastWeek: "la semaine dernière",
            thisMonth: "ce mois",
            lastMonth: "le mois dernier",
            thisYear: "cette année",
            lastYear: "l'année dernière",
            ago: "il y a",
            in: "dans",
            seconds: "secondes",
            minutes: "minutes",
            hours: "heures",
            days: "jours",
            weeks: "semaines",
            months: "mois",
            years: "années",
        },
    },

    de: {
        nav: {
            home: "Startseite",
            products: "Produkte",
            pricing: "Preise",
            about: "Über uns",
            blog: "Blog",
            search: "Suchen",
            signIn: "Anmelden",
            upgrade: "Upgrade",
        },
        hero: {
            title: "Reise der Entwicklung",
            subtitle: "Zen-Entwicklung",
            description:
                "Den Weg des kontinuierlichen Lernens dokumentieren, eine Codezeile nach der anderen. Ein minimalistischer Raum für Gedanken über Technologie, Design und Handwerkskunst.",
            author: "Jason Viipers",
            keywords: ["entwicklung", "programmierung", "technologie", "design", "handwerk", "codierung", "software", "webentwicklung", "minimalismus", "zen"]
        },
        blog: {
            recentWritings: "Neueste Schriften",
            readMore: "Mehr lesen",
            back: "Zurück",
            publishedOn: "Veröffentlicht am",
            readingTime: "Lesezeit",
            minutes: "Minuten",
            tags: "Tags",
            relatedPosts: "Ähnliche Beiträge",
            sharePost: "Beitrag teilen",
            copyLink: "Link kopieren",
            linkCopied: "Link kopiert!",
        },
        search: {
            placeholder: "Beiträge suchen...",
            noResults: "Keine Beiträge gefunden für",
            results: "Ergebnisse",
            navigate: "↑↓ Navigieren",
            select: "↵ Auswählen",
            close: "Esc Schließen",
            searchesLeft: "Suchen übrig",
            limitReached: "Suchlimit für heute erreicht",
            upgradeForUnlimited: "Upgrade für unbegrenzten Suchzugriff",
        },
        chat: {
            title: "KI-Assistent",
            placeholder: "Fragen Sie mich alles...",
            online: "Online",
            thinking: "Denke nach...",
            dailyLimit: "Tägliches Chat-Limit Erreicht",
            limitReached: "Sie haben alle kostenlosen Nachrichten heute verwendet",
            messagesRemaining: "Nachrichten heute übrig",
            upgradeForUnlimited: "Upgrade für unbegrenzten Chat",
            voiceSettings: "Spracheinstellungen",
            contactForm: "Kontaktformular",
            clearChat: "Chat löschen",
            listening: "Höre zu...",
            stopListening: "Aufhören zu hören",
            startVoiceInput: "Spracheingabe starten",
            networkError: "Netzwerkfehler bei der Spracherkennung",
            microphoneError: "Zugriff auf Mikrofon nicht möglich",
            retry: "Erneut versuchen",
            autoPlay: "KI-Antworten automatisch abspielen",
            speed: "Geschwindigkeit",
            pitch: "Tonhöhe",
            volume: "Lautstärke",
            testVoice: "Stimme testen",
            saveSettings: "Einstellungen speichern",
            cancel: "Abbrechen",
        },
        auth: {
            signIn: "Anmelden",
            signUp: "Registrieren",
            createAccount: "Konto erstellen",
            email: "E-Mail",
            password: "Passwort",
            name: "Name",
            forgotPassword: "Passwort vergessen?",
            dontHaveAccount: "Kein Konto? Registrieren",
            alreadyHaveAccount: "Bereits ein Konto? Anmelden",
            invalidCredentials: "Ungültige E-Mail oder Passwort",
            signOut: "Abmelden",
            accountSettings: "Kontoeinstellungen",
            demoAccounts: "Demo-Konten",
        },
        subscription: {
            choosePlan: "Wählen Sie Ihren Plan",
            unlockPremium: "Premium-Inhalte und -Funktionen freischalten",
            currentPlan: "Aktueller Plan",
            upgrade: "Upgrade",
            freePlan: "Kostenlos",
            proPlan: "Pro",
            premiumPlan: "Premium",
            mostPopular: "Am Beliebtesten",
            freeForever: "Für Immer Kostenlos",
            subscribeTo: "Abonnieren",
            getPlan: "Erhalten",
            monthlyBilling: "Monatlich",
            yearlyBilling: "Jährlich",
            save: "Sparen",
            features: "Funktionen",
            moneyBackGuarantee: "30-Tage-Geld-zurück-Garantie",
            cancelAnytime: "Jederzeit kündbar",
            securePayment: "Sichere Zahlung",
        },
        features: {
            publicPosts: "Zugang zu öffentlichen Beiträgen",
            basicSearch: "Grundlegende Suchfunktionalität",
            aiChat: "KI-Chat",
            communityAccess: "Community-Zugang",
            premiumPosts: "Premium-Beiträge & Tutorials",
            unlimitedAiChat: "Unbegrenzter KI-Chat",
            advancedSearch: "Erweiterte Suchfunktionalität",
            codeTemplates: "Code-Vorlagen & Snippets",
            prioritySupport: "Prioritäts-Support",
            adFree: "Werbefreie Erfahrung",
            downloadAccess: "Download-Zugang",
            mentoringSessions: "1-zu-1 Mentoring-Sitzungen",
            exclusiveVideo: "Exklusiver Videoinhalt",
            sourceCodeAccess: "Quellcode-Zugang",
            privateDiscord: "Private Discord-Community",
            monthlyQA: "Monatliche Q&A-Sitzungen",
            earlyAccess: "Früher Zugang zu neuen Inhalten",
            customReviews: "Benutzerdefinierte Code-Reviews",
        },
        contact: {
            title: "Kontakt",
            subject: "Betreff",
            message: "Nachricht",
            sendMessage: "Nachricht senden",
            sending: "Sende...",
            messageSent: "Nachricht gesendet!",
            thankYou: "Danke, dass Sie uns kontaktiert haben. Ich werde Ihnen bald antworten.",
            backToChat: "Zurück zum Chat",
            allFieldsRequired: "Alle Felder sind erforderlich",
        },
        products: {
            title: "Produkte & Ressourcen",
            description: "Digitale Produkte, Kurse und empfohlene Tools für Entwickler",
            recommendedTools: "Empfohlene Tools",
            affiliateLinks: "Affiliate-Links",
            digitalProducts: "Digitale Produkte",
            purchaseNow: "Jetzt kaufen",
            downloadNow: "Jetzt herunterladen",
            features: "Funktionen",
            rating: "Bewertung",
            reviews: "Bewertungen",
        },
        checkout: {
            title: "Kaufabschluss",
            subtitle: "Sie sind einen Schritt davon entfernt, Premium-Inhalte freizuschalten",
            orderSummary: "Bestellübersicht",
            paymentDetails: "Zahlungsdetails",
            creditCard: "Kreditkarte",
            paypal: "PayPal",
            cardNumber: "Kartennummer",
            expiryDate: "Ablaufdatum",
            cvv: "CVV",
            cardholderName: "Name des Karteninhabers",
            country: "Land",
            total: "Gesamt",
            tax: "Steuer",
            processing: "Zahlung wird verarbeitet",
            completePurchase: "Kauf abschließen",
            secureEncryption: "Sichere 256-Bit-SSL-Verschlüsselung",
            trustIndicators: "30-Tage-Geld-zurück-Garantie",
        },
        success: {
            title: "Kauf erfolgreich!",
            description: "Vielen Dank für Ihren Kauf",
            whatsNext: "Was kommt als Nächstes:",
            downloadNow: "Jetzt herunterladen",
            continueReading: "Weiterlesen",
            confirmationSent: "Bestätigungs-E-Mail gesendet",
            checkInbox: "Überprüfen Sie Ihren Posteingang für Kaufdetails und Zugangsanweisungen",
        },
        errors: {
            pageNotFound: "Seite nicht gefunden",
            somethingWentWrong: "Etwas ist schief gelaufen",
            tryAgain: "Erneut versuchen",
            goHome: "Zur Startseite",
            networkError: "Netzwerkfehler",
            serverError: "Serverfehler",
            unauthorized: "Nicht autorisiert",
            forbidden: "Verboten",
            tooManyRequests: "Zu viele Anfragen",
        },
        loading: {
            loading: "Lädt...",
            preparing: "Ihre Zen-Erfahrung wird vorbereitet",
            processing: "Verarbeite...",
            almostReady: "Fast bereit...",
            pleaseWait: "Bitte warten",
        },
        common: {
            yes: "Ja",
            no: "Nein",
            ok: "OK",
            cancel: "Abbrechen",
            save: "Speichern",
            delete: "Löschen",
            edit: "Bearbeiten",
            view: "Ansehen",
            download: "Herunterladen",
            share: "Teilen",
            copy: "Kopieren",
            copied: "Kopiert!",
            more: "Mehr",
            less: "Weniger",
            showMore: "Mehr anzeigen",
            showLess: "Weniger anzeigen",
            previous: "Vorherige",
            next: "Nächste",
            page: "Seite",
            of: "von",
            and: "und",
            or: "oder",
            all: "Alle",
            none: "Keine",
            optional: "Optional",
            required: "Erforderlich",
        },
        time: {
            now: "jetzt",
            today: "heute",
            yesterday: "gestern",
            tomorrow: "morgen",
            thisWeek: "diese Woche",
            lastWeek: "letzte Woche",
            thisMonth: "diesen Monat",
            lastMonth: "letzten Monat",
            thisYear: "dieses Jahr",
            lastYear: "letztes Jahr",
            ago: "vor",
            in: "in",
            seconds: "Sekunden",
            minutes: "Minuten",
            hours: "Stunden",
            days: "Tagen",
            weeks: "Wochen",
            months: "Monaten",
            years: "Jahren",
        },
    },

    ja: {
        nav: {
            home: "ホーム",
            products: "製品",
            pricing: "価格",
            about: "概要",
            blog: "ブログ",
            search: "検索",
            signIn: "サインイン",
            upgrade: "アップグレード",
        },
        hero: {
            title: "開発の旅",
            subtitle: "禅開発",
            description:
                "継続的な学習の道のりを、一行のコードずつ記録する。技術、デザイン、職人技についての思考のためのミニマリストな空間。",
            author: "Jason Viipers",
            keywords: ["開発", "プログラミング", "技術", "デザイン", "職人技", "コーディング", "ソフトウェア", "ウェブ開発", "ミニマリズム", "禅"]
        },
        blog: {
            recentWritings: "最近の記事",
            readMore: "続きを読む",
            back: "戻る",
            publishedOn: "公開日",
            readingTime: "読書時間",
            minutes: "分",
            tags: "タグ",
            relatedPosts: "関連記事",
            sharePost: "記事を共有",
            copyLink: "リンクをコピー",
            linkCopied: "リンクをコピーしました！",
        },
        search: {
            placeholder: "記事を検索...",
            noResults: "該当する記事が見つかりません",
            results: "件の結果",
            navigate: "↑↓ ナビゲート",
            select: "↵ 選択",
            close: "Esc 閉じる",
            searchesLeft: "残り検索回数",
            limitReached: "今日の検索制限に達しました",
            upgradeForUnlimited: "無制限検索にアップグレード",
        },
        chat: {
            title: "AIアシスタント",
            placeholder: "何でも聞いてください...",
            online: "オンライン",
            thinking: "考え中...",
            dailyLimit: "日次チャット制限に達しました",
            limitReached: "今日の無料メッセージを使い切りました",
            messagesRemaining: "本日残りメッセージ数",
            upgradeForUnlimited: "無制限チャットにアップグレード",
            voiceSettings: "音声設定",
            contactForm: "お問い合わせフォーム",
            clearChat: "チャットをクリア",
            listening: "聞いています...",
            stopListening: "聞き取りを停止",
            startVoiceInput: "音声入力を開始",
            networkError: "音声認識中のネットワークエラー",
            microphoneError: "マイクにアクセスできません",
            retry: "再試行",
            autoPlay: "AI応答の自動再生",
            speed: "速度",
            pitch: "ピッチ",
            volume: "音量",
            testVoice: "音声テスト",
            saveSettings: "設定を保存",
            cancel: "キャンセル",
        },
        auth: {
            signIn: "サインイン",
            signUp: "サインアップ",
            createAccount: "アカウント作成",
            email: "メール",
            password: "パスワード",
            name: "名前",
            forgotPassword: "パスワードを忘れましたか？",
            dontHaveAccount: "アカウントをお持ちでないですか？サインアップ",
            alreadyHaveAccount: "既にアカウントをお持ちですか？サインイン",
            invalidCredentials: "無効なメールまたはパスワード",
            signOut: "サインアウト",
            accountSettings: "アカウント設定",
            demoAccounts: "デモアカウント",
        },
        subscription: {
            choosePlan: "プランを選択",
            unlockPremium: "プレミアムコンテンツと機能をアンロック",
            currentPlan: "現在のプラン",
            upgrade: "アップグレード",
            freePlan: "無料",
            proPlan: "プロ",
            premiumPlan: "プレミアム",
            mostPopular: "最も人気",
            freeForever: "永続無料",
            subscribeTo: "購読",
            getPlan: "取得",
            monthlyBilling: "月払い",
            yearlyBilling: "年払い",
            save: "節約",
            features: "機能",
            moneyBackGuarantee: "30日間返金保証",
            cancelAnytime: "いつでもキャンセル可能",
            securePayment: "安全な支払い",
        },
        features: {
            publicPosts: "公開記事へのアクセス",
            basicSearch: "基本検索機能",
            aiChat: "AIチャット",
            communityAccess: "コミュニティアクセス",
            premiumPosts: "プレミアム記事とチュートリアル",
            unlimitedAiChat: "無制限AIチャット",
            advancedSearch: "高度な検索機能",
            codeTemplates: "コードテンプレートとスニペット",
            prioritySupport: "優先サポート",
            adFree: "広告なし体験",
            downloadAccess: "ダウンロードアクセス",
            mentoringSessions: "1対1メンタリングセッション",
            exclusiveVideo: "独占ビデオコンテンツ",
            sourceCodeAccess: "ソースコードアクセス",
            privateDiscord: "プライベートDiscordコミュニティ",
            monthlyQA: "月次Q&Aセッション",
            earlyAccess: "新しいコンテンツへの早期アクセス",
            customReviews: "カスタムコードレビュー",
        },
        contact: {
            title: "お問い合わせ",
            subject: "件名",
            message: "メッセージ",
            sendMessage: "メッセージを送信",
            sending: "送信中...",
            messageSent: "メッセージを送信しました！",
            thankYou: "お問い合わせありがとうございます。すぐに返信いたします。",
            backToChat: "チャットに戻る",
            allFieldsRequired: "すべてのフィールドが必須です",
        },
        products: {
            title: "製品とリソース",
            description: "開発者向けのデジタル製品、コース、推奨ツール",
            recommendedTools: "推奨ツール",
            affiliateLinks: "アフィリエイトリンク",
            digitalProducts: "デジタル製品",
            purchaseNow: "今すぐ購入",
            downloadNow: "今すぐダウンロード",
            features: "機能",
            rating: "評価",
            reviews: "レビュー",
        },
        checkout: {
            title: "購入を完了",
            subtitle: "プレミアムコンテンツのアンロックまであと一歩です",
            orderSummary: "注文概要",
            paymentDetails: "支払い詳細",
            creditCard: "クレジットカード",
            paypal: "PayPal",
            cardNumber: "カード番号",
            expiryDate: "有効期限",
            cvv: "CVV",
            cardholderName: "カード名義人",
            country: "国",
            total: "合計",
            tax: "税",
            processing: "支払い処理中",
            completePurchase: "購入を完了",
            secureEncryption: "安全な256ビットSSL暗号化",
            trustIndicators: "30日間返金保証",
        },
        success: {
            title: "購入完了！",
            description: "ご購入ありがとうございます",
            whatsNext: "次のステップ：",
            downloadNow: "今すぐダウンロード",
            continueReading: "読み続ける",
            confirmationSent: "確認メールを送信しました",
            checkInbox: "購入詳細とアクセス方法について受信箱をご確認ください",
        },
        errors: {
            pageNotFound: "ページが見つかりません",
            somethingWentWrong: "何かがうまくいきませんでした",
            tryAgain: "再試行",
            goHome: "ホームに戻る",
            networkError: "ネットワークエラー",
            serverError: "サーバーエラー",
            unauthorized: "認証されていません",
            forbidden: "禁止されています",
            tooManyRequests: "リクエストが多すぎます",
        },
        loading: {
            loading: "読み込み中...",
            preparing: "禅体験を準備中",
            processing: "処理中...",
            almostReady: "もうすぐ準備完了...",
            pleaseWait: "お待ちください",
        },
        common: {
            yes: "はい",
            no: "いいえ",
            ok: "OK",
            cancel: "キャンセル",
            save: "保存",
            delete: "削除",
            edit: "編集",
            view: "表示",
            download: "ダウンロード",
            share: "共有",
            copy: "コピー",
            copied: "コピーしました！",
            more: "もっと",
            less: "少なく",
            showMore: "もっと表示",
            showLess: "少なく表示",
            previous: "前",
            next: "次",
            page: "ページ",
            of: "の",
            and: "と",
            or: "または",
            all: "すべて",
            none: "なし",
            optional: "オプション",
            required: "必須",
        },
        time: {
            now: "今",
            today: "今日",
            yesterday: "昨日",
            tomorrow: "明日",
            thisWeek: "今週",
            lastWeek: "先週",
            thisMonth: "今月",
            lastMonth: "先月",
            thisYear: "今年",
            lastYear: "昨年",
            ago: "前",
            in: "で",
            seconds: "秒",
            minutes: "分",
            hours: "時間",
            days: "日",
            weeks: "週",
            months: "月",
            years: "年",
        },
    },

    ar: {
        nav: {
            home: "الرئيسية",
            products: "المنتجات",
            pricing: "الأسعار",
            about: "حولنا",
            blog: "المدونة",
            search: "بحث",
            signIn: "تسجيل الدخول",
            upgrade: "ترقية",
        },
        hero: {
            title: "رحلة التطوير",
            subtitle: "تطوير زن",
            description:
                "توثيق مسار التعلم المستمر، سطر كود واحد في كل مرة. مساحة بسيطة للأفكار حول التكنولوجيا والتصميم والحرفية.",
            author: "Jason Viipers",
            keywords: ["تطوير", "برمجة", "تكنولوجيا", "تصميم", "حرفية", "ترميز", "برمجيات", "تطوير ويب", "بساطة", "زن"]
        },
        blog: {
            recentWritings: "الكتابات الحديثة",
            readMore: "اقرأ المزيد",
            back: "العودة",
            publishedOn: "نُشر في",
            readingTime: "وقت القراءة",
            minutes: "دقائق",
            tags: "العلامات",
            relatedPosts: "المنشورات ذات الصلة",
            sharePost: "مشاركة المنشور",
            copyLink: "نسخ الرابط",
            linkCopied: "تم نسخ الرابط!",
        },
        search: {
            placeholder: "البحث في المنشورات...",
            noResults: "لم يتم العثور على منشورات لـ",
            results: "النتائج",
            navigate: "↑↓ التنقل",
            select: "↵ اختيار",
            close: "إغلاق Esc",
            searchesLeft: "عمليات بحث متبقية",
            limitReached: "تم الوصول لحد البحث اليوم",
            upgradeForUnlimited: "الترقية للوصول غير المحدود للبحث",
        },
        chat: {
            title: "مساعد الذكاء الاصطناعي",
            placeholder: "اسألني أي شيء...",
            online: "متصل",
            thinking: "أفكر...",
            dailyLimit: "تم الوصول لحد المحادثة اليومي",
            limitReached: "لقد استخدمت جميع الرسائل المجانية اليوم",
            messagesRemaining: "رسائل متبقية اليوم",
            upgradeForUnlimited: "الترقية للمحادثة غير المحدودة",
            voiceSettings: "إعدادات الصوت",
            contactForm: "نموذج الاتصال",
            clearChat: "مسح المحادثة",
            listening: "أستمع...",
            stopListening: "التوقف عن الاستماع",
            startVoiceInput: "بدء الإدخال الصوتي",
            networkError: "خطأ في الشبكة أثناء التعرف على الكلام",
            microphoneError: "غير قادر على الوصول للميكروفون",
            retry: "إعادة المحاولة",
            autoPlay: "تشغيل تلقائي لردود الذكاء الاصطناعي",
            speed: "السرعة",
            pitch: "النبرة",
            volume: "مستوى الصوت",
            testVoice: "اختبار الصوت",
            saveSettings: "حفظ الإعدادات",
            cancel: "إلغاء",
        },
        auth: {
            signIn: "تسجيل الدخول",
            signUp: "التسجيل",
            createAccount: "إنشاء حساب",
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
            name: "الاسم",
            forgotPassword: "نسيت كلمة المرور؟",
            dontHaveAccount: "لا تملك حساباً؟ سجل",
            alreadyHaveAccount: "تملك حساباً بالفعل؟ سجل الدخول",
            invalidCredentials: "بريد إلكتروني أو كلمة مرور غير صالحة",
            signOut: "تسجيل الخروج",
            accountSettings: "إعدادات الحساب",
            demoAccounts: "حسابات تجريبية",
        },
        subscription: {
            choosePlan: "اختر خطتك",
            unlockPremium: "اكشف المحتوى والميزات المميزة",
            currentPlan: "الخطة الحالية",
            upgrade: "ترقية",
            freePlan: "مجاني",
            proPlan: "محترف",
            premiumPlan: "مميز",
            mostPopular: "الأكثر شعبية",
            freeForever: "مجاني للأبد",
            subscribeTo: "الاشتراك في",
            getPlan: "احصل على",
            monthlyBilling: "فوترة شهرية",
            yearlyBilling: "فوترة سنوية",
            save: "وفر",
            features: "الميزات",
            moneyBackGuarantee: "ضمان استرداد المال لمدة 30 يوماً",
            cancelAnytime: "إلغاء في أي وقت",
            securePayment: "دفع آمن",
        },
        features: {
            publicPosts: "الوصول للمنشورات العامة",
            basicSearch: "وظيفة البحث الأساسية",
            aiChat: "محادثة الذكاء الاصطناعي",
            communityAccess: "الوصول للمجتمع",
            premiumPosts: "منشورات ودروس مميزة",
            unlimitedAiChat: "محادثة ذكاء اصطناعي غير محدودة",
            advancedSearch: "وظيفة البحث المتقدمة",
            codeTemplates: "قوالب ومقاطع الكود",
            prioritySupport: "دعم أولوية",
            adFree: "تجربة خالية من الإعلانات",
            downloadAccess: "وصول للتحميل",
            mentoringSessions: "جلسات إرشاد 1-إلى-1",
            exclusiveVideo: "محتوى فيديو حصري",
            sourceCodeAccess: "الوصول لرمز المصدر",
            privateDiscord: "مجتمع Discord خاص",
            monthlyQA: "جلسات أسئلة وأجوبة شهرية",
            earlyAccess: "وصول مبكر للمحتوى الجديد",
            customReviews: "مراجعات كود مخصصة",
        },
        contact: {
            title: "اتصل بنا",
            subject: "الموضوع",
            message: "الرسالة",
            sendMessage: "إرسال الرسالة",
            sending: "جاري الإرسال...",
            messageSent: "تم إرسال الرسالة!",
            thankYou: "شكراً لتواصلك معنا. سأرد عليك قريباً.",
            backToChat: "العودة للمحادثة",
            allFieldsRequired: "جميع الحقول مطلوبة",
        },
        products: {
            title: "المنتجات والموارد",
            description: "منتجات رقمية، دورات، وأدوات موصى بها للمطورين",
            recommendedTools: "الأدوات الموصى بها",
            affiliateLinks: "روابط التسويق بالعمولة",
            digitalProducts: "منتجات رقمية",
            purchaseNow: "اشتر الآن",
            downloadNow: "حمل الآن",
            features: "الميزات",
            rating: "التقييم",
            reviews: "المراجعات",
        },
        checkout: {
            title: "أكمل عملية الشراء",
            subtitle: "أنت على بعد خطوة واحدة من كشف المحتوى المميز",
            orderSummary: "ملخص الطلب",
            paymentDetails: "تفاصيل الدفع",
            creditCard: "بطاقة ائتمان",
            paypal: "PayPal",
            cardNumber: "رقم البطاقة",
            expiryDate: "تاريخ انتهاء الصلاحية",
            cvv: "CVV",
            cardholderName: "اسم حامل البطاقة",
            country: "الدولة",
            total: "المجموع",
            tax: "الضريبة",
            processing: "معالجة الدفع",
            completePurchase: "إكمال الشراء",
            secureEncryption: "تشفير SSL آمن 256 بت",
            trustIndicators: "ضمان استرداد المال لمدة 30 يوماً",
        },
        success: {
            title: "تم الشراء بنجاح!",
            description: "شكراً لشرائك",
            whatsNext: "ما التالي:",
            downloadNow: "حمل الآن",
            continueReading: "تابع القراءة",
            confirmationSent: "تم إرسال بريد التأكيد",
            checkInbox: "تحقق من صندوق الوارد للحصول على تفاصيل الشراء وتعليمات الوصول",
        },
        errors: {
            pageNotFound: "الصفحة غير موجودة",
            somethingWentWrong: "حدث خطأ ما",
            tryAgain: "إعادة المحاولة",
            goHome: "اذهب للرئيسية",
            networkError: "خطأ في الشبكة",
            serverError: "خطأ في الخادم",
            unauthorized: "غير مخول",
            forbidden: "محظور",
            tooManyRequests: "طلبات كثيرة جداً",
        },
        loading: {
            loading: "جاري التحميل...",
            preparing: "جاري تحضير تجربة الزن الخاصة بك",
            processing: "جاري المعالجة...",
            almostReady: "جاهز تقريباً...",
            pleaseWait: "يرجى الانتظار",
        },
        common: {
            yes: "نعم",
            no: "لا",
            ok: "موافق",
            cancel: "إلغاء",
            save: "حفظ",
            delete: "حذف",
            edit: "تحرير",
            view: "عرض",
            download: "تحميل",
            share: "مشاركة",
            copy: "نسخ",
            copied: "تم النسخ!",
            more: "المزيد",
            less: "أقل",
            showMore: "إظهار المزيد",
            showLess: "إظهار أقل",
            previous: "السابق",
            next: "التالي",
            page: "صفحة",
            of: "من",
            and: "و",
            or: "أو",
            all: "الكل",
            none: "لا شيء",
            optional: "اختياري",
            required: "مطلوب",
        },
        time: {
            now: "الآن",
            today: "اليوم",
            yesterday: "أمس",
            tomorrow: "غداً",
            thisWeek: "هذا الأسبوع",
            lastWeek: "الأسبوع الماضي",
            thisMonth: "هذا الشهر",
            lastMonth: "الشهر الماضي",
            thisYear: "هذا العام",
            lastYear: "العام الماضي",
            ago: "منذ",
            in: "في",
            seconds: "ثواني",
            minutes: "دقائق",
            hours: "ساعات",
            days: "أيام",
            weeks: "أسابيع",
            months: "أشهر",
            years: "سنوات",
        },
    },
    zh: {
        nav: {
            home: "首页",
            products: "产品",
            pricing: "价格",
            about: "关于",
            blog: "博客",
            search: "搜索",
            signIn: "登录",
            upgrade: "升级",
        },
        hero: {
            title: "开发之旅",
            subtitle: "禅开发",
            description:
                "记录持续学习的道路，一行代码一次。一个关于技术、设计和工艺思考的极简空间。",
            author: "Jason Viipers",
            keywords: ["开发", "编程", "技术", "设计", "工艺", "编码", "软件", "网页开发", "极简主义", "禅"]
        },
        blog: {
            recentWritings: "最新文章",
            readMore: "阅读更多",
            back: "返回",
            publishedOn: "发布于",
            readingTime: "阅读时间",
            minutes: "分钟",
            tags: "标签",
            relatedPosts: "相关文章",
            sharePost: "分享文章",
            copyLink: "复制链接",
            linkCopied: "链接已复制！",
        },
        search: {
            placeholder: "搜索文章...",
            noResults: "未找到相关文章",
            results: "结果",
            navigate: "↑↓ 导航",
            select: "↵ 选择",
            close: "Esc 关闭",
            searchesLeft: "剩余搜索次数",
            limitReached: "今日搜索次数已达上限",
            upgradeForUnlimited: "升级获得无限搜索权限",
        },
        chat: {
            title: "AI助手",
            placeholder: "问我任何问题...",
            online: "在线",
            thinking: "思考中...",
            dailyLimit: "每日聊天限制已达上限",
            limitReached: "您今天的免费消息已用完",
            messagesRemaining: "今日剩余消息数",
            upgradeForUnlimited: "升级获得无限聊天",
            voiceSettings: "语音设置",
            contactForm: "联系表单",
            clearChat: "清空聊天",
            listening: "聆听中...",
            stopListening: "停止聆听",
            startVoiceInput: "开始语音输入",
            networkError: "语音识别时网络错误",
            microphoneError: "无法访问麦克风",
            retry: "重试",
            autoPlay: "自动播放AI回复",
            speed: "速度",
            pitch: "音调",
            volume: "音量",
            testVoice: "测试语音",
            saveSettings: "保存设置",
            cancel: "取消",
        },
        auth: {
            signIn: "登录",
            signUp: "注册",
            createAccount: "创建账户",
            email: "邮箱",
            password: "密码",
            name: "姓名",
            forgotPassword: "忘记密码？",
            dontHaveAccount: "没有账户？注册",
            alreadyHaveAccount: "已有账户？登录",
            invalidCredentials: "邮箱或密码无效",
            signOut: "登出",
            accountSettings: "账户设置",
            demoAccounts: "演示账户",
        },
        subscription: {
            choosePlan: "选择您的计划",
            unlockPremium: "解锁高级内容和功能",
            currentPlan: "当前计划",
            upgrade: "升级",
            freePlan: "免费",
            proPlan: "专业版",
            premiumPlan: "高级版",
            mostPopular: "最受欢迎",
            freeForever: "永久免费",
            subscribeTo: "订阅",
            getPlan: "获取",
            monthlyBilling: "按月计费",
            yearlyBilling: "按年计费",
            save: "节省",
            features: "功能",
            moneyBackGuarantee: "30天退款保证",
            cancelAnytime: "随时取消",
            securePayment: "安全支付",
        },
        features: {
            publicPosts: "访问公开文章",
            basicSearch: "基础搜索功能",
            aiChat: "AI聊天",
            communityAccess: "社区访问",
            premiumPosts: "高级文章和教程",
            unlimitedAiChat: "无限AI聊天",
            advancedSearch: "高级搜索功能",
            codeTemplates: "代码模板和片段",
            prioritySupport: "优先支持",
            adFree: "无广告体验",
            downloadAccess: "下载权限",
            mentoringSessions: "一对一指导课程",
            exclusiveVideo: "独家视频内容",
            sourceCodeAccess: "源代码访问",
            privateDiscord: "私人Discord社区",
            monthlyQA: "每月问答环节",
            earlyAccess: "新内容抢先体验",
            customReviews: "自定义代码审查",
        },
        contact: {
            title: "联系我们",
            subject: "主题",
            message: "消息",
            sendMessage: "发送消息",
            sending: "发送中...",
            messageSent: "消息已发送！",
            thankYou: "感谢您的联系。我会尽快回复您。",
            backToChat: "返回聊天",
            allFieldsRequired: "所有字段都是必填的",
        },
        products: {
            title: "产品与资源",
            description: "为开发者提供的数字产品、课程和推荐工具",
            recommendedTools: "推荐工具",
            affiliateLinks: "推广链接",
            digitalProducts: "数字产品",
            purchaseNow: "立即购买",
            downloadNow: "立即下载",
            features: "功能",
            rating: "评分",
            reviews: "评论",
        },
        checkout: {
            title: "完成购买",
            subtitle: "您距离解锁高级内容仅一步之遥",
            orderSummary: "订单摘要",
            paymentDetails: "支付详情",
            creditCard: "信用卡",
            paypal: "PayPal",
            cardNumber: "卡号",
            expiryDate: "到期日期",
            cvv: "CVV",
            cardholderName: "持卡人姓名",
            country: "国家",
            total: "总计",
            tax: "税费",
            processing: "支付处理中",
            completePurchase: "完成购买",
            secureEncryption: "安全256位SSL加密",
            trustIndicators: "30天退款保证",
        },
        success: {
            title: "购买成功！",
            description: "感谢您的购买",
            whatsNext: "接下来：",
            downloadNow: "立即下载",
            continueReading: "继续阅读",
            confirmationSent: "确认邮件已发送",
            checkInbox: "请查看您的收件箱获取购买详情和访问说明",
        },
        errors: {
            pageNotFound: "页面未找到",
            somethingWentWrong: "出了点问题",
            tryAgain: "重试",
            goHome: "回到首页",
            networkError: "网络错误",
            serverError: "服务器错误",
            unauthorized: "未授权",
            forbidden: "禁止访问",
            tooManyRequests: "请求过多",
        },
        loading: {
            loading: "加载中...",
            preparing: "正在准备您的禅体验",
            processing: "处理中...",
            almostReady: "即将就绪...",
            pleaseWait: "请稍候",
        },
        common: {
            yes: "是",
            no: "否",
            ok: "确定",
            cancel: "取消",
            save: "保存",
            delete: "删除",
            edit: "编辑",
            view: "查看",
            download: "下载",
            share: "分享",
            copy: "复制",
            copied: "已复制！",
            more: "更多",
            less: "更少",
            showMore: "显示更多",
            showLess: "显示更少",
            previous: "上一页",
            next: "下一页",
            page: "页",
            of: "共",
            and: "和",
            or: "或",
            all: "全部",
            none: "无",
            optional: "可选",
            required: "必需",
        },
        time: {
            now: "现在",
            today: "今天",
            yesterday: "昨天",
            tomorrow: "明天",
            thisWeek: "本周",
            lastWeek: "上周",
            thisMonth: "本月",
            lastMonth: "上月",
            thisYear: "今年",
            lastYear: "去年",
            ago: "前",
            in: "后",
            seconds: "秒",
            minutes: "分钟",
            hours: "小时",
            days: "天",
            weeks: "周",
            months: "月",
            years: "年",
        },
    },
}