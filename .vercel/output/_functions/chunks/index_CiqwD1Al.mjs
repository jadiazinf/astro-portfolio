import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, d as createAstro, g as getDefaultExportFromCjs, e as renderHead, f as renderSlot } from './astro/server_DftBg5Oc.mjs';
import { l as lifecycle_function_unavailable, s as ssr_context, i as is_array, g as get_prototype_of, o as object_prototype, a as run_all, A as ATTACHMENT_KEY, d as define_property, n as noop$2, e as enable_async_mode_flag, b as attributes, c as clsx$1, f as bind_props, h as derived, j as run, k as hasContext, m as getContext, p as setContext, q as getAllContexts, t as props_id, u as spread_props, v as escape_html, w as ensure_array_like, x as attr, y as attr_class, z as attr_style, B as stringify, C as store_get, D as unsubscribe_stores } from './_@astro-renderers_DY5zhuKj.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import './index_DKHmmOtR.mjs';
import { $ as $$Image } from './_astro_assets_CC1sGYPR.mjs';
/* empty css                         */
import { T as THEME_NAME, E as ETheme } from './types_mIFp1dTE.mjs';
import * as z from 'zod';
import { validator } from '@felte/validator-zod';

/** @import { SSRContext } from '#server' */
/** @import { Renderer } from './internal/server/renderer.js' */

/** @param {() => void} fn */
function onDestroy(fn) {
	/** @type {Renderer} */ (/** @type {SSRContext} */ (ssr_context).r).on_destroy(fn);
}

function mount() {
	lifecycle_function_unavailable('mount');
}

function unmount() {
	lifecycle_function_unavailable('unmount');
}

async function tick() {}

/** @import { Equals } from '#client' */


/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Snapshot } from './types' */

/**
 * In dev, we keep track of which properties could not be cloned. In prod
 * we don't bother, but we keep a dummy array around so that the
 * signature stays the same
 * @type {string[]}
 */
const empty = [];

/**
 * @template T
 * @param {T} value
 * @param {boolean} [skip_warning]
 * @param {boolean} [no_tojson]
 * @returns {Snapshot<T>}
 */
function snapshot(value, skip_warning = false, no_tojson = false) {

	return clone(value, new Map(), '', empty, null, no_tojson);
}

/**
 * @template T
 * @param {T} value
 * @param {Map<T, Snapshot<T>>} cloned
 * @param {string} path
 * @param {string[]} paths
 * @param {null | T} [original] The original value, if `value` was produced from a `toJSON` call
 * @param {boolean} [no_tojson]
 * @returns {Snapshot<T>}
 */
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
	if (typeof value === 'object' && value !== null) {
		var unwrapped = cloned.get(value);
		if (unwrapped !== undefined) return unwrapped;

		if (value instanceof Map) return /** @type {Snapshot<T>} */ (new Map(value));
		if (value instanceof Set) return /** @type {Snapshot<T>} */ (new Set(value));

		if (is_array(value)) {
			var copy = /** @type {Snapshot<any>} */ (Array(value.length));
			cloned.set(value, copy);

			if (original !== null) {
				cloned.set(original, copy);
			}

			for (var i = 0; i < value.length; i += 1) {
				var element = value[i];
				if (i in value) {
					copy[i] = clone(element, cloned, path, paths, null, no_tojson);
				}
			}

			return copy;
		}

		if (get_prototype_of(value) === object_prototype) {
			/** @type {Snapshot<any>} */
			copy = {};
			cloned.set(value, copy);

			if (original !== null) {
				cloned.set(original, copy);
			}

			for (var key in value) {
				copy[key] = clone(
					// @ts-expect-error
					value[key],
					cloned,
					path,
					paths,
					null,
					no_tojson
				);
			}

			return copy;
		}

		if (value instanceof Date) {
			return /** @type {Snapshot<T>} */ (structuredClone(value));
		}

		if (typeof (/** @type {T & { toJSON?: any } } */ (value).toJSON) === 'function' && !no_tojson) {
			return clone(
				/** @type {T & { toJSON(): any } } */ (value).toJSON(),
				cloned,
				path,
				paths,
				// Associate the instance with the toJSON clone
				value
			);
		}
	}

	if (value instanceof EventTarget) {
		// can't be cloned
		return /** @type {Snapshot<T>} */ (value);
	}

	try {
		return /** @type {Snapshot<T>} */ (structuredClone(value));
	} catch (e) {

		return /** @type {Snapshot<T>} */ (value);
	}
}

/** @type {Array<() => void>} */
let micro_tasks = [];

function run_micro_tasks() {
	var tasks = micro_tasks;
	micro_tasks = [];
	run_all(tasks);
}

/**
 * @param {() => void} fn
 */
function queue_micro_task(fn) {
	if (micro_tasks.length === 0 && true) {
		var tasks = micro_tasks;
		queueMicrotask(() => {
			// If this is false, a flushSync happened in the meantime. Do _not_ run new scheduled microtasks in that case
			// as the ordering of microtasks would be broken at that point - consider this case:
			// - queue_micro_task schedules microtask A to flush task X
			// - synchronously after, flushSync runs, processing task X
			// - synchronously after, some other microtask B is scheduled, but not through queue_micro_task but for example a Promise.resolve() in user code
			// - synchronously after, queue_micro_task schedules microtask C to flush task Y
			// - one tick later, microtask A now resolves, flushing task Y before microtask B, which is incorrect
			// This if check prevents that race condition (that realistically will only happen in tests)
			if (tasks === micro_tasks) run_micro_tasks();
		});
	}

	micro_tasks.push(fn);
}

/**
 * @template T
 * @param {() => T} fn
 */
function without_reactive_context(fn) {
	try {
		return fn();
	} finally {
	}
}

/** @import { Action, ActionReturn } from '../action/public' */
/** @import { Attachment } from './public' */

/**
 * Creates an object key that will be recognised as an attachment when the object is spread onto an element,
 * as a programmatic alternative to using `{@attach ...}`. This can be useful for library authors, though
 * is generally not needed when building an app.
 *
 * ```svelte
 * <script>
 * 	import { createAttachmentKey } from 'svelte/attachments';
 *
 * 	const props = {
 * 		class: 'cool',
 * 		onclick: () => alert('clicked'),
 * 		[createAttachmentKey()]: (node) => {
 * 			node.textContent = 'attached!';
 * 		}
 * 	};
 * </script>
 *
 * <button {...props}>click me</button>
 * ```
 * @since 5.29
 */
function createAttachmentKey() {
	return Symbol(ATTACHMENT_KEY);
}

/**
 * @param {string} event_name
 * @param {EventTarget} dom
 * @param {EventListener} [handler]
 * @param {AddEventListenerOptions} [options]
 */
function create_event(event_name, dom, handler, options = {}) {
	/**
	 * @this {EventTarget}
	 */
	function target_handler(/** @type {Event} */ event) {
		if (!options.capture) {
			// Only call in the bubble phase, else delegated events would be called before the capturing events
			handle_event_propagation.call(dom, event);
		}
		if (!event.cancelBubble) {
			return without_reactive_context(() => {
				return handler?.call(this, event);
			});
		}
	}

	// Chrome has a bug where pointer events don't work when attached to a DOM element that has been cloned
	// with cloneNode() and the DOM element is disconnected from the document. To ensure the event works, we
	// defer the attachment till after it's been appended to the document. TODO: remove this once Chrome fixes
	// this bug. The same applies to wheel events and touch events.
	if (
		event_name.startsWith('pointer') ||
		event_name.startsWith('touch') ||
		event_name === 'wheel'
	) {
		queue_micro_task(() => {
			dom.addEventListener(event_name, target_handler, options);
		});
	} else {
		dom.addEventListener(event_name, target_handler, options);
	}

	return target_handler;
}

/**
 * Attaches an event handler to an element and returns a function that removes the handler. Using this
 * rather than `addEventListener` will preserve the correct order relative to handlers added declaratively
 * (with attributes like `onclick`), which use event delegation for performance reasons
 *
 * @param {EventTarget} element
 * @param {string} type
 * @param {EventListener} handler
 * @param {AddEventListenerOptions} [options]
 */
function on(element, type, handler, options = {}) {
	var target_handler = create_event(type, element, handler, options);

	return () => {
		element.removeEventListener(type, target_handler, options);
	};
}

// used to store the reference to the currently propagated event
// to prevent garbage collection between microtasks in Firefox
// If the event object is GCed too early, the expando __root property
// set on the event object is lost, causing the event delegation
// to process the event twice
let last_propagated_event = null;

/**
 * @this {EventTarget}
 * @param {Event} event
 * @returns {void}
 */
function handle_event_propagation(event) {
	var handler_element = this;
	var owner_document = /** @type {Node} */ (handler_element).ownerDocument;
	var event_name = event.type;
	var path = event.composedPath?.() || [];
	var current_target = /** @type {null | Element} */ (path[0] || event.target);

	last_propagated_event = event;

	// composedPath contains list of nodes the event has propagated through.
	// We check __root to skip all nodes below it in case this is a
	// parent of the __root node, which indicates that there's nested
	// mounted apps. In this case we don't want to trigger events multiple times.
	var path_idx = 0;

	// the `last_propagated_event === event` check is redundant, but
	// without it the variable will be DCE'd and things will
	// fail mysteriously in Firefox
	// @ts-expect-error is added below
	var handled_at = last_propagated_event === event && event.__root;

	if (handled_at) {
		var at_idx = path.indexOf(handled_at);
		if (
			at_idx !== -1 &&
			(handler_element === document || handler_element === /** @type {any} */ (window))
		) {
			// This is the fallback document listener or a window listener, but the event was already handled
			// -> ignore, but set handle_at to document/window so that we're resetting the event
			// chain in case someone manually dispatches the same event object again.
			// @ts-expect-error
			event.__root = handler_element;
			return;
		}

		// We're deliberately not skipping if the index is higher, because
		// someone could create an event programmatically and emit it multiple times,
		// in which case we want to handle the whole propagation chain properly each time.
		// (this will only be a false negative if the event is dispatched multiple times and
		// the fallback document listener isn't reached in between, but that's super rare)
		var handler_idx = path.indexOf(handler_element);
		if (handler_idx === -1) {
			// handle_idx can theoretically be -1 (happened in some JSDOM testing scenarios with an event listener on the window object)
			// so guard against that, too, and assume that everything was handled at this point.
			return;
		}

		if (at_idx <= handler_idx) {
			path_idx = at_idx;
		}
	}

	current_target = /** @type {Element} */ (path[path_idx] || event.target);
	// there can only be one delegated event per element, and we either already handled the current target,
	// or this is the very first target in the chain which has a non-delegated listener, in which case it's safe
	// to handle a possible delegated event on it later (through the root delegation listener for example).
	if (current_target === handler_element) return;

	// Proxy currentTarget to correct target
	define_property(event, 'currentTarget', {
		configurable: true,
		get() {
			return current_target || owner_document;
		}
	});

	try {
		/**
		 * @type {unknown}
		 */
		var throw_error;
		/**
		 * @type {unknown[]}
		 */
		var other_errors = [];

		while (current_target !== null) {
			/** @type {null | Element} */
			var parent_element =
				current_target.assignedSlot ||
				current_target.parentNode ||
				/** @type {any} */ (current_target).host ||
				null;

			try {
				// @ts-expect-error
				var delegated = current_target['__' + event_name];

				if (
					delegated != null &&
					(!(/** @type {any} */ (current_target).disabled) ||
						// DOM could've been updated already by the time this is reached, so we check this as well
						// -> the target could not have been disabled because it emits the event in the first place
						event.target === current_target)
				) {
					if (is_array(delegated)) {
						var [fn, ...data] = delegated;
						fn.apply(current_target, [event, ...data]);
					} else {
						delegated.call(current_target, event);
					}
				}
			} catch (error) {
				if (throw_error) {
					other_errors.push(error);
				} else {
					throw_error = error;
				}
			}
			if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
				break;
			}
			current_target = parent_element;
		}

		if (throw_error) {
			for (let error of other_errors) {
				// Throw the rest of the errors, one-by-one on a microtask
				queueMicrotask(() => {
					throw error;
				});
			}
			throw throw_error;
		}
	} finally {
		// @ts-expect-error is used above
		event.__root = handler_element;
		// @ts-ignore remove proxy on currentTarget
		delete event.currentTarget;
	}
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop$2) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop$2) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop$2;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

var EAppLanguages = /* @__PURE__ */ ((EAppLanguages2) => {
  EAppLanguages2["ENGLISH"] = "en";
  EAppLanguages2["SPANISH"] = "es";
  return EAppLanguages2;
})(EAppLanguages || {});

function getLocaleTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      en: "English",
      es: "Spanish"
    },
    [EAppLanguages.SPANISH]: {
      en: "Inglés",
      es: "Español"
    }
  };
}

function getNavbarTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      about: "About me",
      contact: "Contact",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills"
    },
    [EAppLanguages.SPANISH]: {
      about: "Sobre mí",
      contact: "Contacto",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades"
    }
  };
}

function getAboutMeTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      aboutMe1: "I'm a full stack developer passionate about creating digital solutions that positively impact people's lives. My education at Universidad Católica Andrés Bello provided me with a strong foundation in computer science and software development.",
      aboutMe2: "As a computer engineer, I specialize in all phases of the software development lifecycle—from analysis and design to implementation, testing, and maintenance. I'm proficient in modern technologies such as React, Next.js, Node.js, and SQL database systems. I enjoy working on projects that challenge my technical skills and push me to explore new tools and approaches.",
      aboutMe3: "When I'm not coding, I enjoy exploring new technologies and staying up to date with the latest trends in web development."
    },
    [EAppLanguages.SPANISH]: {
      aboutMe1: "Soy un desarrollador full stack apasionado por crear soluciones digitales que impacten positivamente la vida de las personas. Mi formación en la Universidad Católica Andrés Bello me proporcionó una base sólida en ciencias de la computación y desarrollo de software.",
      aboutMe2: "Como ingeniero en computación, me especializo en todas las fases del ciclo de vida del software, desde el análisis y diseño hasta la implementación, pruebas y mantenimiento. Domino tecnologías modernas como React, Next.js, Nodejs y sistemas de bases de datos SQL. Disfruto trabajando en proyectos que desafían mis habilidades técnicas y me impulsan a explorar nuevas herramientas y enfoques.",
      aboutMe3: "Cuando no estoy programando, me gusta explorar nuevas tecnologías y mantenerme actualizado con las últimas tendencias en desarrollo web."
    }
  };
}

function getContactTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      letsWorkTogether: "Let's Work Together",
      projectInMind: "Do You Have a Project in Mind?",
      projectText: "I'm always interested in new opportunities and challenging projects. If you have an idea or need help with your next project, feel free to reach out.",
      sendMessage: "Send Me a Message",
      name: "Name",
      subject: "Subject",
      yourMessage: "Your message...",
      send: "Send Message"
    },
    [EAppLanguages.SPANISH]: {
      letsWorkTogether: "Trabajemos Juntos",
      projectInMind: "¿Tienes un proyecto en mente?",
      projectText: "Estoy siempre interesado en nuevas oportunidades y proyectos desafiantes. Si tienes una idea o necesitas ayuda con tu próximo proyecto, no dudes en contactarme.",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      subject: "Asunto",
      yourMessage: "Tu mensaje...",
      send: "Enviar mensaje"
    }
  };
}

function getExperienceTranslations() {
  return {
    portfolio: {
      [EAppLanguages.ENGLISH]: {
        period: "September 2025",
        title: "Portfolio",
        company: "Personal",
        description: "Portfolio built with Astro and Svelte, using Tailwind CSS and Shadcn to deliver a modern, accessible, and high-performance interface. Its purpose is to showcase my work, skills, and professional approach as a web developer."
      },
      [EAppLanguages.SPANISH]: {
        period: "septiembre 2025",
        title: "Portafolio",
        company: "Personal",
        description: "Portafolio desarrollado con Astro y Svelte, utilizando Tailwind CSS y Shadcn para construir una interfaz moderna, accesible y de alto rendimiento. Su propósito es presentar mi trabajo, habilidades y enfoque profesional como desarrollador web"
      }
    },
    gma: {
      [EAppLanguages.ENGLISH]: {
        period: "April 2024 – July 2025",
        title: "Full Stack Developer",
        company: "GMA Desarrollo, Caracas, Venezuela",
        description: "Developed a marketplace for automotive workshops, allowing users to search for services, request quotes, hire providers, and track service history. Businesses could monitor service quality metrics, completed jobs, and customer satisfaction. Technologies used: Next.js (v13), Ruby on Rails (v7), PostgreSQL (v14)"
      },
      [EAppLanguages.SPANISH]: {
        period: "abril 2024 – julio 2025",
        title: "Desarrollador Full Stack",
        company: "GMA Desarrollo, Caracas, Venezuela",
        description: "Desarrollo de un marketplace de talleres automotrices, donde los usuarios pueden buscar talleres, solicitar presupuestos, contratar servicios y llevar un historial. Las empresas pueden visualizar métricas de calidad, servicios completados y satisfacción del cliente. Tecnologías utilizadas: Next.js (v13), Ruby on Rails (v7), PostgreSQL (v14)."
      }
    },
    eddu: {
      [EAppLanguages.ENGLISH]: {
        period: "August 2023 – September 2024",
        title: "Full Stack Developer",
        company: "Eddu, Caracas, Venezuela",
        description: "Built an educational platform with modules for reporting, process automation, collections, and notifications. Technologies used: Next.js (v13), TypeScript, HTML, CSS, Git, GitHub, "
      },
      [EAppLanguages.SPANISH]: {
        period: "agosto 2023 – septiembre 2024",
        title: "Desarrollador Full Stack",
        company: "Eddu, Caracas, Venezuela",
        description: "Desarrollo de una plataforma para sistemas educativos, con módulos de informes, automatización de procesos, colecciones y notificaciones. Tecnologías utilizadas: Next.js (v13), TypeScript, HTML, CSS, Git, GitHub, Node.js (v17), Google Cloud Functions, PostgreSQL (v14)."
      }
    }
  };
}

function getHeroTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      helloThere: "Hello there",
      fullStackDeveloper: "Full Stack Developer",
      description: "Graduate of Universidad Católica Andrés Bello in Caracas, Venezuela. Specialized in crafting exceptional digital experiences that blend elegant design with robust code.",
      myJob: "See my jobs",
      downloadCv: "Download CV"
    },
    [EAppLanguages.SPANISH]: {
      helloThere: "Hola a todos",
      fullStackDeveloper: "Desarrollador Full Stack",
      description: "Graduado de la Universidad Católica Andrés Bello en Caracas, Venezuela. Especializado en crear experiencias digitales excepcionales que combinan diseño elegante con código robusto.",
      myJob: "Ver mis trabajos",
      downloadCv: "Descargar CV"
    }
  };
}

function getEmailTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      name: {
        required: "The name is required",
        length: "The name must have a length of minimum 3 characters"
      },
      email: {
        required: "The email is required",
        format: "Not a valid email"
      },
      subject: {
        required: "The subject is required.",
        length: "The subject must have a length of minimum 3 characters"
      },
      message: {
        required: "The message is required",
        length: "The message must have a length of minimum 10 characters"
      }
    },
    [EAppLanguages.SPANISH]: {
      name: {
        required: "El nombre es requerido",
        length: "El nombre debe de tener una longitud de por lo menos 3 caracteres"
      },
      email: {
        required: "El email es requerido",
        format: "No es un correo válido"
      },
      subject: {
        required: "El asunto es requerido",
        length: "El asunto debe de tener una longitud de por lo menos 3 caracteres"
      },
      message: {
        required: "El mensaje es requerido",
        length: "El mensaje debe de tener una longitud de por lo menos 10 caracteres"
      }
    }
  };
}

const defaultLang = EAppLanguages.ENGLISH;
const AppTranslations = {
  [EAppLanguages.ENGLISH]: {
    components: {
      shared: {
        ui: {
          navbar: getNavbarTranslations().en,
          locale: getLocaleTranslations().en
        }
      }
    },
    pages: {
      hero: getHeroTranslations().en,
      aboutMe: getAboutMeTranslations().en,
      professionalExperience: "Professional Experience",
      portfolio: getExperienceTranslations().portfolio.en,
      gma: getExperienceTranslations().gma.en,
      eddu: getExperienceTranslations().eddu.en,
      skills: "Technical Skills",
      contact: getContactTranslations().en
    },
    utils: {
      emails: {
        schema: getEmailTranslations().en,
        okResponse: "Email sent succesfully",
        badResponse: "The email could not be sent. Please try again later."
      }
    }
  },
  [EAppLanguages.SPANISH]: {
    components: {
      shared: {
        ui: {
          navbar: getNavbarTranslations().es,
          locale: getLocaleTranslations().es
        }
      }
    },
    pages: {
      hero: getHeroTranslations().es,
      aboutMe: getAboutMeTranslations().es,
      professionalExperience: "Experiencia profesional",
      portfolio: getExperienceTranslations().portfolio.es,
      gma: getExperienceTranslations().gma.es,
      eddu: getExperienceTranslations().eddu.es,
      skills: "Habilidades Técnicas",
      contact: getContactTranslations().es
    },
    utils: {
      emails: {
        schema: getEmailTranslations().es,
        okResponse: "Email enviado exitosamente",
        badResponse: "No se pudo enviar el correo, intente de nuevo más tarde."
      }
    }
  }
};
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, segment) => {
    if (typeof acc === "object" && acc !== null && segment in acc) {
      return acc[segment];
    }
    return void 0;
  }, obj);
}
function useTranslations(lang) {
  return function translate(path) {
    const fallback = getNestedValue(AppTranslations[defaultLang], path);
    const value = getNestedValue(AppTranslations[lang], path);
    return value ?? fallback ?? "";
  };
}

enable_async_mode_flag();

function cn$1(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = tv({
	base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",

	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
			destructive: "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white",
			outline: "bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border",
			secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},

		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9"
		}
	},

	defaultVariants: { variant: "default", size: "default" }
});

function Button($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			class: className,
			variant = "default",
			size = "default",
			ref = null,
			href = undefined,
			type = "button",
			disabled,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		if (href) {
			$$renderer.push('<!--[-->');

			$$renderer.push(`<a${attributes({
				'data-slot': 'button',
				class: clsx$1(cn$1(buttonVariants({ variant, size }), className)),
				href: disabled ? undefined : href,
				'aria-disabled': disabled,
				role: disabled ? "link" : undefined,
				tabindex: disabled ? -1 : undefined,
				...restProps
			})}>`);

			children?.($$renderer);
			$$renderer.push(`<!----></a>`);
		} else {
			$$renderer.push('<!--[!-->');

			$$renderer.push(`<button${attributes({
				'data-slot': 'button',
				class: clsx$1(cn$1(buttonVariants({ variant, size }), className)),
				type,
				disabled,
				...restProps
			})}>`);

			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}

function Linkedin($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`);
}

function Mail($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>`);
}

function Github($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`);
}

function ArrowDown($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>`);
}

function Phone($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>`);
}

function MapPinIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`);
}

function BurgerMenu($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`);
}

function Spinner$1($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>`);
}

function ScrollButton($$renderer) {

	$$renderer.push(`<button class="text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer">`);
	ArrowDown($$renderer);
	$$renderer.push(`<!----></button>`);
}

const LINKEDIN_URL = "http://www.linkedin.com/in/jes%C3%BAs-adolfo-d%C3%ADaz-centeno-66a447265";
const GITHUB_URL = "https://www.github.com/jadiazinf";

const $$GithubLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(GITHUB_URL, "href")} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors"> ${renderComponent($$result, "GithubIcon", Github, { "class": "h-6 w-6" })} </a>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/shared/ui/github/GithubLink.astro", void 0);

const $$LinkedinLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(LINKEDIN_URL, "href")} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors"> ${renderComponent($$result, "LinkedinIcon", Linkedin, { "class": "h-6 w-6" })} </a>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/shared/ui/linkedin/LinkedinLink.astro", void 0);

const enCv = "/_astro/DiazJesus_CV_EN.DkWJHcDk.pdf";

const esCv = "/_astro/DiazJesus_CV_ES.DDd0oE3q.pdf";

const $$Astro$8 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  const currentLang = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translations = useTranslations(currentLang);
  const cvHref = currentLang === EAppLanguages.SPANISH ? esCv : enCv;
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center px-6 pt-20"> <div class="max-w-4xl mx-auto text-center"> <div class="mb-6"> <p class="text-muted-foreground mb-2 font-mono">${translations("pages.hero.helloThere")}</p> <h1 class="text-4xl md:text-6xl font-bold mb-4 text-balance"> <span class="gradient-text">Jesus Diaz</span> </h1> <h2 class="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">${translations("pages.hero.fullStackDeveloper")}</h2> </div> <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed"> ${translations("pages.hero.description")} </p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"> ${renderComponent($$result, "Button", Button, { "size": "lg", "class": "font-semibold cursor-pointer", "asChild": true }, { "default": ($$result2) => renderTemplate` <a href="#experience"> ${translations("pages.hero.myJob")} </a> ` })} ${renderComponent($$result, "Button", Button, { "variant": "outline", "size": "lg", "class": "cursor-pointer", "asChild": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(cvHref, "href")} download> ${translations("pages.hero.downloadCv")} </a> ` })} </div> <div class="flex items-center justify-center space-x-6 mb-12"> ${renderComponent($$result, "GithubLink", $$GithubLink, {})} ${renderComponent($$result, "LinkedinLink", $$LinkedinLink, {})} <a href="mailto:tu@email.com" class="text-muted-foreground hover:text-foreground transition-colors"> ${renderComponent($$result, "MailIcon", Mail, { "class": "h-6 w-6" })} </a> </div> ${renderComponent($$result, "ScrollButton", ScrollButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/ScrollButton.svelte", "client:component-export": "default" })} </div> </section>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/Hero.astro", void 0);

const ProfileImage = new Proxy({"src":"/_astro/profile.B6HImF6r.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jesusdicen/Proyects/Portfolio/Codebase/src/static/images/profile.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const currentLanguage = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translate = useTranslations(currentLanguage);
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 px-6"> <div class="max-w-4xl mx-auto"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-bold mb-6 text-balance">${translate("components.shared.ui.navbar.about")}</h2> <div class="space-y-4 text-muted-foreground leading-relaxed text-justify"> <p> ${translate("pages.aboutMe.aboutMe1")} </p> <p> ${translate("pages.aboutMe.aboutMe2")} </p> <p> ${translate("pages.aboutMe.aboutMe3")} </p> </div> </div> <div class="relative"> <div class="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": ProfileImage, "alt": "A super sensual pic of me", "class": "rounded-2xl" })} </div> </div> </div> </div> </section>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/AboutMe.astro", void 0);

function isFunction$2(value) {
    return typeof value === "function";
}
function isObject$1(value) {
    return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES$1 = ["string", "number", "bigint", "boolean"];
function isClassValue$1(value) {
    // handle primitive types
    if (value === null || value === undefined)
        return true;
    if (CLASS_VALUE_PRIMITIVE_TYPES$1.includes(typeof value))
        return true;
    // handle arrays (ClassArray)
    if (Array.isArray(value))
        return value.every((item) => isClassValue$1(item));
    // handle objects (ClassDictionary)
    if (typeof value === "object") {
        // ensure it's a plain object and not some other object type
        if (Object.getPrototypeOf(value) !== Object.prototype)
            return false;
        return true;
    }
    return false;
}

/* box-extras.svelte.js generated by Svelte v5.39.6 */

const BoxSymbol$1 = Symbol("box");
const isWritableSymbol$1 = Symbol("is-writable");

function boxWith$1(getter, setter) {
	const derived = getter();

	if (setter) {
		return {
			[BoxSymbol$1]: true,
			[isWritableSymbol$1]: true,

			get current() {
				return derived;
			},

			set current(v) {
				setter(v);
			}
		};
	}

	return {
		[BoxSymbol$1]: true,

		get current() {
			return getter();
		}
	};
}

/**
 * @returns Whether the value is a Box
 *
 * @see {@link https://runed.dev/docs/functions/box}
 */
function isBox$1(value) {
	return isObject$1(value) && BoxSymbol$1 in value;
}

function boxFrom$1(value) {
	if (isBox$1(value)) return value;
	if (isFunction$2(value)) return boxWith$1(value);

	return simpleBox(value);
}

function simpleBox(initialValue) {
	let current = initialValue;

	return {
		[BoxSymbol$1]: true,
		[isWritableSymbol$1]: true,

		get current() {
			return current;
		},

		set current(v) {
			current = v;
		}
	};
}

/**
 * Composes event handlers into a single function that can be called with an event.
 * If the previous handler cancels the event using `event.preventDefault()`, the handlers
 * that follow will not be called.
 */
function composeHandlers$1(...handlers) {
    return function (e) {
        for (const handler of handlers) {
            if (!handler)
                continue;
            if (e.defaultPrevented)
                return;
            if (typeof handler === "function") {
                handler.call(this, e);
            }
            else {
                handler.current?.call(this, e);
            }
        }
    };
}

var cjs = {};

var inlineStyleParser;
var hasRequiredInlineStyleParser;

function requireInlineStyleParser () {
	if (hasRequiredInlineStyleParser) return inlineStyleParser;
	hasRequiredInlineStyleParser = 1;
	// http://www.w3.org/TR/CSS21/grammar.html
	// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
	var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

	var NEWLINE_REGEX = /\n/g;
	var WHITESPACE_REGEX = /^\s*/;

	// declaration
	var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
	var COLON_REGEX = /^:\s*/;
	var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
	var SEMICOLON_REGEX = /^[;\s]*/;

	// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
	var TRIM_REGEX = /^\s+|\s+$/g;

	// strings
	var NEWLINE = '\n';
	var FORWARD_SLASH = '/';
	var ASTERISK = '*';
	var EMPTY_STRING = '';

	// types
	var TYPE_COMMENT = 'comment';
	var TYPE_DECLARATION = 'declaration';

	/**
	 * @param {String} style
	 * @param {Object} [options]
	 * @return {Object[]}
	 * @throws {TypeError}
	 * @throws {Error}
	 */
	inlineStyleParser = function (style, options) {
	  if (typeof style !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }

	  if (!style) return [];

	  options = options || {};

	  /**
	   * Positional.
	   */
	  var lineno = 1;
	  var column = 1;

	  /**
	   * Update lineno and column based on `str`.
	   *
	   * @param {String} str
	   */
	  function updatePosition(str) {
	    var lines = str.match(NEWLINE_REGEX);
	    if (lines) lineno += lines.length;
	    var i = str.lastIndexOf(NEWLINE);
	    column = ~i ? str.length - i : column + str.length;
	  }

	  /**
	   * Mark position and patch `node.position`.
	   *
	   * @return {Function}
	   */
	  function position() {
	    var start = { line: lineno, column: column };
	    return function (node) {
	      node.position = new Position(start);
	      whitespace();
	      return node;
	    };
	  }

	  /**
	   * Store position information for a node.
	   *
	   * @constructor
	   * @property {Object} start
	   * @property {Object} end
	   * @property {undefined|String} source
	   */
	  function Position(start) {
	    this.start = start;
	    this.end = { line: lineno, column: column };
	    this.source = options.source;
	  }

	  /**
	   * Non-enumerable source string.
	   */
	  Position.prototype.content = style;

	  /**
	   * Error `msg`.
	   *
	   * @param {String} msg
	   * @throws {Error}
	   */
	  function error(msg) {
	    var err = new Error(
	      options.source + ':' + lineno + ':' + column + ': ' + msg
	    );
	    err.reason = msg;
	    err.filename = options.source;
	    err.line = lineno;
	    err.column = column;
	    err.source = style;

	    if (options.silent) ; else {
	      throw err;
	    }
	  }

	  /**
	   * Match `re` and return captures.
	   *
	   * @param {RegExp} re
	   * @return {undefined|Array}
	   */
	  function match(re) {
	    var m = re.exec(style);
	    if (!m) return;
	    var str = m[0];
	    updatePosition(str);
	    style = style.slice(str.length);
	    return m;
	  }

	  /**
	   * Parse whitespace.
	   */
	  function whitespace() {
	    match(WHITESPACE_REGEX);
	  }

	  /**
	   * Parse comments.
	   *
	   * @param {Object[]} [rules]
	   * @return {Object[]}
	   */
	  function comments(rules) {
	    var c;
	    rules = rules || [];
	    while ((c = comment())) {
	      if (c !== false) {
	        rules.push(c);
	      }
	    }
	    return rules;
	  }

	  /**
	   * Parse comment.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function comment() {
	    var pos = position();
	    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

	    var i = 2;
	    while (
	      EMPTY_STRING != style.charAt(i) &&
	      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
	    ) {
	      ++i;
	    }
	    i += 2;

	    if (EMPTY_STRING === style.charAt(i - 1)) {
	      return error('End of comment missing');
	    }

	    var str = style.slice(2, i - 2);
	    column += 2;
	    updatePosition(str);
	    style = style.slice(i);
	    column += 2;

	    return pos({
	      type: TYPE_COMMENT,
	      comment: str
	    });
	  }

	  /**
	   * Parse declaration.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function declaration() {
	    var pos = position();

	    // prop
	    var prop = match(PROPERTY_REGEX);
	    if (!prop) return;
	    comment();

	    // :
	    if (!match(COLON_REGEX)) return error("property missing ':'");

	    // val
	    var val = match(VALUE_REGEX);

	    var ret = pos({
	      type: TYPE_DECLARATION,
	      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
	      value: val
	        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
	        : EMPTY_STRING
	    });

	    // ;
	    match(SEMICOLON_REGEX);

	    return ret;
	  }

	  /**
	   * Parse declarations.
	   *
	   * @return {Object[]}
	   */
	  function declarations() {
	    var decls = [];

	    comments(decls);

	    // declarations
	    var decl;
	    while ((decl = declaration())) {
	      if (decl !== false) {
	        decls.push(decl);
	        comments(decls);
	      }
	    }

	    return decls;
	  }

	  whitespace();
	  return declarations();
	};

	/**
	 * Trim `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function trim(str) {
	  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
	}
	return inlineStyleParser;
}

var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;
	var __importDefault = (cjs && cjs.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(cjs, "__esModule", { value: true });
	cjs.default = StyleToObject;
	var inline_style_parser_1 = __importDefault(requireInlineStyleParser());
	/**
	 * Parses inline style to object.
	 *
	 * @param style - Inline style.
	 * @param iterator - Iterator.
	 * @returns - Style object or null.
	 *
	 * @example Parsing inline style to object:
	 *
	 * ```js
	 * import parse from 'style-to-object';
	 * parse('line-height: 42;'); // { 'line-height': '42' }
	 * ```
	 */
	function StyleToObject(style, iterator) {
	    var styleObject = null;
	    if (!style || typeof style !== 'string') {
	        return styleObject;
	    }
	    var declarations = (0, inline_style_parser_1.default)(style);
	    var hasIterator = typeof iterator === 'function';
	    declarations.forEach(function (declaration) {
	        if (declaration.type !== 'declaration') {
	            return;
	        }
	        var property = declaration.property, value = declaration.value;
	        if (hasIterator) {
	            iterator(property, value, declaration);
	        }
	        else if (value) {
	            styleObject = styleObject || {};
	            styleObject[property] = value;
	        }
	    });
	    return styleObject;
	}
	
	return cjs;
}

var cjsExports = requireCjs();
const StyleToObject = /*@__PURE__*/getDefaultExportFromCjs(cjsExports);

// ensure compatibility with rollup umd build
const parse = StyleToObject.default || StyleToObject;

const NUMBER_CHAR_RE$1 = /\d/;
const STR_SPLITTERS$1 = ["-", "_", "/", "."];
function isUppercase$1(char = "") {
    if (NUMBER_CHAR_RE$1.test(char))
        return undefined;
    return char !== char.toLowerCase();
}
function splitByCase$1(str) {
    const parts = [];
    let buff = "";
    let previousUpper;
    let previousSplitter;
    for (const char of str) {
        // Splitter
        const isSplitter = STR_SPLITTERS$1.includes(char);
        if (isSplitter === true) {
            parts.push(buff);
            buff = "";
            previousUpper = undefined;
            continue;
        }
        const isUpper = isUppercase$1(char);
        if (previousSplitter === false) {
            // Case rising edge
            if (previousUpper === false && isUpper === true) {
                parts.push(buff);
                buff = char;
                previousUpper = isUpper;
                continue;
            }
            // Case falling edge
            if (previousUpper === true && isUpper === false && buff.length > 1) {
                const lastChar = buff.at(-1);
                parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
                buff = lastChar + char;
                previousUpper = isUpper;
                continue;
            }
        }
        // Normal char
        buff += char;
        previousUpper = isUpper;
        previousSplitter = isSplitter;
    }
    parts.push(buff);
    return parts;
}
function pascalCase$1(str) {
    if (!str)
        return "";
    return splitByCase$1(str)
        .map((p) => upperFirst$1(p))
        .join("");
}
function camelCase$1(str) {
    return lowerFirst$1(pascalCase$1(str || ""));
}
function upperFirst$1(str) {
    return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst$1(str) {
    return str ? str[0].toLowerCase() + str.slice(1) : "";
}

function cssToStyleObj$1(css) {
    if (!css)
        return {};
    const styleObj = {};
    function iterator(name, value) {
        if (name.startsWith("-moz-") ||
            name.startsWith("-webkit-") ||
            name.startsWith("-ms-") ||
            name.startsWith("-o-")) {
            styleObj[pascalCase$1(name)] = value;
            return;
        }
        if (name.startsWith("--")) {
            styleObj[name] = value;
            return;
        }
        styleObj[camelCase$1(name)] = value;
    }
    parse(css, iterator);
    return styleObj;
}

/**
 * Executes an array of callback functions with the same arguments.
 * @template T The types of the arguments that the callback functions take.
 * @param callbacks array of callback functions to execute.
 * @returns A new function that executes all of the original callback functions with the same arguments.
 */
function executeCallbacks$1(...callbacks) {
    return (...args) => {
        for (const callback of callbacks) {
            if (typeof callback === "function") {
                callback(...args);
            }
        }
    };
}

function createParser$1(matcher, replacer) {
    const regex = RegExp(matcher, "g");
    return (str) => {
        // throw an error if not a string
        if (typeof str !== "string") {
            throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
        }
        // if no match between string and matcher
        if (!str.match(regex))
            return str;
        // executes the replacer function for each match
        return str.replace(regex, replacer);
    };
}
const camelToKebab$1 = createParser$1(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS$1(styleObj) {
    if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
        throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
    }
    return Object.keys(styleObj)
        .map((property) => `${camelToKebab$1(property)}: ${styleObj[property]};`)
        .join("\n");
}

function styleToString$1(style = {}) {
    return styleToCSS$1(style).replace("\n", " ");
}

const EVENT_LIST = [
    "onabort",
    "onanimationcancel",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "onauxclick",
    "onbeforeinput",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncompositionend",
    "oncompositionstart",
    "oncompositionupdate",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onfocusin",
    "onfocusout",
    "onformdata",
    "ongotpointercapture",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onlostpointercapture",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpointercancel",
    "onpointerdown",
    "onpointerenter",
    "onpointerleave",
    "onpointermove",
    "onpointerout",
    "onpointerover",
    "onpointerup",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onselectionchange",
    "onselectstart",
    "onslotchange",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart",
    "ontransitioncancel",
    "ontransitionend",
    "ontransitionrun",
    "ontransitionstart",
    "onvolumechange",
    "onwaiting",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);

/**
 * Modified from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts (see NOTICE.txt for source)
 */
function isEventHandler$1(key) {
    return EVENT_LIST_SET.has(key);
}
/**
 * Given a list of prop objects, merges them into a single object.
 * - Automatically composes event handlers (e.g. `onclick`, `oninput`, etc.)
 * - Chains regular functions with the same name so they are called in order
 * - Merges class strings with `clsx`
 * - Merges style objects and converts them to strings
 * - Handles a bug with Svelte where setting the `hidden` attribute to `false` doesn't remove it
 * - Overrides other values with the last one
 */
function mergeProps$1(...args) {
    const result = { ...args[0] };
    for (let i = 1; i < args.length; i++) {
        const props = args[i];
        if (!props)
            continue;
        // Handle string keys
        for (const key of Object.keys(props)) {
            const a = result[key];
            const b = props[key];
            const aIsFunction = typeof a === "function";
            const bIsFunction = typeof b === "function";
            // compose event handlers
            if (aIsFunction && typeof bIsFunction && isEventHandler$1(key)) {
                // handle merging of event handlers
                const aHandler = a;
                const bHandler = b;
                result[key] = composeHandlers$1(aHandler, bHandler);
            }
            else if (aIsFunction && bIsFunction) {
                // chain non-event handler functions
                result[key] = executeCallbacks$1(a, b);
            }
            else if (key === "class") {
                // handle merging acceptable class values from clsx
                const aIsClassValue = isClassValue$1(a);
                const bIsClassValue = isClassValue$1(b);
                if (aIsClassValue && bIsClassValue) {
                    result[key] = clsx(a, b);
                }
                else if (aIsClassValue) {
                    result[key] = clsx(a);
                }
                else if (bIsClassValue) {
                    result[key] = clsx(b);
                }
            }
            else if (key === "style") {
                const aIsObject = typeof a === "object";
                const bIsObject = typeof b === "object";
                const aIsString = typeof a === "string";
                const bIsString = typeof b === "string";
                if (aIsObject && bIsObject) {
                    // both are style objects, merge them
                    result[key] = { ...a, ...b };
                }
                else if (aIsObject && bIsString) {
                    // a is style object, b is string, convert b to style object and merge
                    const parsedStyle = cssToStyleObj$1(b);
                    result[key] = { ...a, ...parsedStyle };
                }
                else if (aIsString && bIsObject) {
                    // a is string, b is style object, convert a to style object and merge
                    const parsedStyle = cssToStyleObj$1(a);
                    result[key] = { ...parsedStyle, ...b };
                }
                else if (aIsString && bIsString) {
                    // both are strings, convert both to objects and merge
                    const parsedStyleA = cssToStyleObj$1(a);
                    const parsedStyleB = cssToStyleObj$1(b);
                    result[key] = { ...parsedStyleA, ...parsedStyleB };
                }
                else if (aIsObject) {
                    result[key] = a;
                }
                else if (bIsObject) {
                    result[key] = b;
                }
                else if (aIsString) {
                    result[key] = a;
                }
                else if (bIsString) {
                    result[key] = b;
                }
            }
            else {
                // override other values
                result[key] = b !== undefined ? b : a;
            }
        }
        // handle symbol keys (mostly for `Attachments`)
        for (const key of Object.getOwnPropertySymbols(props)) {
            const a = result[key];
            const b = props[key];
            // for matching symbols, we just override
            result[key] = b !== undefined ? b : a;
        }
    }
    // convert style object to string
    if (typeof result.style === "object") {
        result.style = styleToString$1(result.style).replaceAll("\n", " ");
    }
    // handle weird svelte bug where `hidden` is not removed when set to `false`
    if (result.hidden === false) {
        result.hidden = undefined;
        delete result.hidden;
    }
    // handle weird svelte bug where `disabled` is not removed when set to `false`
    if (result.disabled === false) {
        result.disabled = undefined;
        delete result.disabled;
    }
    return result;
}

const SvelteMap = globalThis.Map;

class MediaQuery {
	current;
	/**
	 * @param {string} query
	 * @param {boolean} [matches]
	 */
	constructor(query, matches = false) {
		this.current = matches;
	}
}

/**
 * @param {any} _
 */
function createSubscriber(_) {
	return () => {};
}

/**
 * A utility function that executes a callback after a specified number of milliseconds.
 */
function afterSleep$1(ms, cb) {
    return setTimeout(cb, ms);
}

function afterTick$1(fn) {
    tick().then(fn);
}

const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(node) {
    return isObject$1(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
    return isObject$1(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
    return isObject$1(node) && node.constructor?.name === "VisualViewport";
}
function isNode$1(node) {
    return isObject$1(node) && node.nodeType !== undefined;
}
function isShadowRoot$1(node) {
    return isNode$1(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
    if (!parent || !child)
        return false;
    if (!isHTMLElement$2(parent) || !isHTMLElement$2(child))
        return false;
    const rootNode = child.getRootNode?.();
    if (parent === child)
        return true;
    if (parent.contains(child))
        return true;
    if (rootNode && isShadowRoot$1(rootNode)) {
        let next = child;
        while (next) {
            if (parent === next)
                return true;
            // @ts-expect-error - host is not typed
            next = next.parentNode || next.host;
        }
    }
    return false;
}
function getDocument(node) {
    if (isDocument(node))
        return node;
    if (isWindow(node))
        return node.document;
    return node?.ownerDocument ?? document;
}
function getWindow$1(node) {
    if (isShadowRoot$1(node))
        return getWindow$1(node.host);
    if (isDocument(node))
        return node.defaultView ?? window;
    if (isHTMLElement$2(node))
        return node.ownerDocument?.defaultView ?? window;
    return window;
}
function getActiveElement$4(rootNode) {
    let activeElement = rootNode.activeElement;
    while (activeElement?.shadowRoot) {
        const el = activeElement.shadowRoot.activeElement;
        if (el === activeElement)
            break;
        else
            activeElement = el;
    }
    return activeElement;
}

/* dom-context.svelte.js generated by Svelte v5.39.6 */

class DOMContext {
	element;

	#root = derived(() => {
		if (!this.element.current) return document;

		const rootNode = this.element.current.getRootNode() ?? document;

		return rootNode;
	});

	get root() {
		return this.#root();
	}

	set root($$value) {
		return this.#root($$value);
	}

	constructor(element) {
		if (typeof element === "function") {
			this.element = boxWith$1(element);
		} else {
			this.element = element;
		}
	}

	getDocument = () => {
		return getDocument(this.root);
	};

	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};

	getActiveElement = () => {
		return getActiveElement$4(this.root);
	};

	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};

	getElementById(id) {
		return this.root.getElementById(id);
	}

	querySelector = (selector) => {
		if (!this.root) return null;

		return this.root.querySelector(selector);
	};

	querySelectorAll = (selector) => {
		if (!this.root) return [];

		return this.root.querySelectorAll(selector);
	};

	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};

	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
}

/**
 * Creates a Svelte Attachment that attaches a DOM element to a ref.
 * The ref can be either a WritableBox or a callback function.
 *
 * @param ref - Either a WritableBox to store the element in, or a callback function that receives the element
 * @param onChange - Optional callback that fires when the ref changes
 * @returns An object with a spreadable attachment key that should be spread onto the element
 *
 * @example
 * // Using with WritableBox
 * const ref = box<HTMLDivElement | null>(null);
 * <div {...attachRef(ref)}>Content</div>
 *
 * @example
 * // Using with callback
 * <div {...attachRef((node) => myNode = node)}>Content</div>
 *
 * @example
 * // Using with onChange
 * <div {...attachRef(ref, (node) => console.log(node))}>Content</div>
 */
function attachRef(ref, onChange) {
    return {
        [createAttachmentKey()]: (node) => {
            if (isBox$1(ref)) {
                ref.current = node;
                run(() => onChange?.(node));
                return () => {
                    // we don't want to detach the node if it's still connected
                    if ("isConnected" in node && node.isConnected)
                        return;
                    ref.current = null;
                    onChange?.(null);
                };
            }
            ref(node);
            run(() => onChange?.(node));
            return () => {
                // we don't want to detach the node if it's still connected
                if ("isConnected" in node && node.isConnected)
                    return;
                ref(null);
                onChange?.(null);
            };
        }
    };
}

const defaultWindow$3 = undefined;

/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement$3(document) {
    let activeElement = document.activeElement;
    while (activeElement?.shadowRoot) {
        const node = activeElement.shadowRoot.activeElement;
        if (node === activeElement)
            break;
        else
            activeElement = node;
    }
    return activeElement;
}

/* active-element.svelte.js generated by Svelte v5.39.6 */

let ActiveElement$3 = class ActiveElement {
	#document;
	#subscribe;

	constructor(options = {}) {
		const { window = defaultWindow$3, document = window?.document } = options;

		if (window === undefined) return;

		this.#document = document;

		this.#subscribe = createSubscriber();
	}

	get current() {
		this.#subscribe?.();

		if (!this.#document) return null;

		return getActiveElement$3(this.#document);
	}
};

/**
 * An object holding a reactive value that is equal to `document.activeElement`.
 * It automatically listens for changes, keeping the reference up to date.
 *
 * If you wish to use a custom document or shadowRoot, you should use
 * [useActiveElement](https://runed.dev/docs/utilities/active-element) instead.
 *
 * @see {@link https://runed.dev/docs/utilities/active-element}
 */
new ActiveElement$3();

function isFunction$1(value) {
    return typeof value === "function";
}

let Context$2 = class Context {
    #name;
    #key;
    /**
     * @param name The name of the context.
     * This is used for generating the context key and error messages.
     */
    constructor(name) {
        this.#name = name;
        this.#key = Symbol(name);
    }
    /**
     * The key used to get and set the context.
     *
     * It is not recommended to use this value directly.
     * Instead, use the methods provided by this class.
     */
    get key() {
        return this.#key;
    }
    /**
     * Checks whether this has been set in the context of a parent component.
     *
     * Must be called during component initialisation.
     */
    exists() {
        return hasContext(this.#key);
    }
    /**
     * Retrieves the context that belongs to the closest parent component.
     *
     * Must be called during component initialisation.
     *
     * @throws An error if the context does not exist.
     */
    get() {
        const context = getContext(this.#key);
        if (context === undefined) {
            throw new Error(`Context "${this.#name}" not found`);
        }
        return context;
    }
    /**
     * Retrieves the context that belongs to the closest parent component,
     * or the given fallback value if the context does not exist.
     *
     * Must be called during component initialisation.
     */
    getOr(fallback) {
        const context = getContext(this.#key);
        if (context === undefined) {
            return fallback;
        }
        return context;
    }
    /**
     * Associates the given value with the current component and returns it.
     *
     * Must be called during component initialisation.
     */
    set(context) {
        return setContext(this.#key, context);
    }
};

/* watch.svelte.js generated by Svelte v5.39.6 */

function runWatcher$1(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}

function watch$1(sources, effect, options) {
	runWatcher$1(sources, "post", effect, options);
}

function watchPre$1(sources, effect, options) {
	runWatcher$1(sources, "pre", effect, options);
}

watch$1.pre = watchPre$1;

function get$2(value) {
    if (isFunction$1(value)) {
        return value();
    }
    return value;
}

/* element-size.svelte.js generated by Svelte v5.39.6 */

class ElementSize {
	// no need to use `$state` here since we are using createSubscriber
	#size = { width: 0, height: 0 };

	#observed = false;
	#options;
	#node;
	#window;

	// we use a derived here to extract the width so that if the width doesn't change we don't get a state update
	// which we would get if we would just use a getter since the version of the subscriber will be changing
	#width = derived(() => {
		this.#subscribe()?.();

		return this.getSize().width;
	});

	// we use a derived here to extract the height so that if the height doesn't change we don't get a state update
	// which we would get if we would just use a getter since the version of the subscriber will be changing
	#height = derived(() => {
		this.#subscribe()?.();

		return this.getSize().height;
	});

	// we need to use a derived here because the class will be created before the node is bound to the ref
	#subscribe = derived(() => {
		const node$ = get$2(this.#node);

		if (!node$) return;

		return createSubscriber();
	});

	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow$3;
		this.#options = options;
		this.#node = node;
		this.#size = { width: 0, height: 0 };
	}

	calculateSize() {
		const element = get$2(this.#node);

		// no element or no window, return undefined, we will return 0x0 in the getSize method
		if (!element || !this.#window) {
			return;
		}

		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;

		// easy mode, just return offsets
		if (this.#options.box === "border-box") {
			return { width: offsetWidth, height: offsetHeight };
		}

		// hard mode, we need to calculate the content size
		const style = this.#window.getComputedStyle(element);

		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		const contentWidth = offsetWidth - paddingWidth - borderWidth;
		const contentHeight = offsetHeight - paddingHeight - borderHeight;

		return { width: contentWidth, height: contentHeight };
	}

	getSize() {
		// if the resize observer already run we can just return the size
		// otherwise we calculate the size if possible or we return the initial size
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}

	get current() {
		this.#subscribe()?.();

		return this.getSize();
	}

	get width() {
		return this.#width();
	}

	get height() {
		return this.#height();
	}
}

/* previous.svelte.js generated by Svelte v5.39.6 */

class Previous {
	#previous = undefined;

	constructor(getter, initialValue) {
		if (initialValue !== undefined) this.#previous = initialValue;

		watch$1(() => getter(), (_, v) => {
			this.#previous = v;
		});
	}

	get current() {
		return this.#previous;
	}
}

function boolToStr(condition) {
    return condition ? "true" : "false";
}
function getDataOpenClosed(condition) {
    return condition ? "open" : "closed";
}
class BitsAttrs {
    #variant;
    #prefix;
    attrs;
    constructor(config) {
        this.#variant = config.getVariant ? config.getVariant() : null;
        this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
        this.getAttr = this.getAttr.bind(this);
        this.selector = this.selector.bind(this);
        this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
    }
    getAttr(part, variantOverride) {
        if (variantOverride)
            return `data-${variantOverride}-${part}`;
        return `${this.#prefix}${part}`;
    }
    selector(part, variantOverride) {
        return `[${this.getAttr(part, variantOverride)}]`;
    }
}
function createBitsAttrs(config) {
    const bitsAttrs = new BitsAttrs(config);
    return {
        ...bitsAttrs.attrs,
        selector: bitsAttrs.selector,
        getAttr: bitsAttrs.getAttr,
    };
}

const ENTER = "Enter";
const ESCAPE = "Escape";
const SPACE = " ";

const isBrowser$3 = typeof document !== "undefined";
const isIOS$1 = getIsIOS();
function getIsIOS() {
    return (isBrowser$3 &&
        window?.navigator?.userAgent &&
        (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
            // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
            (window?.navigator?.maxTouchPoints > 2 &&
                /iPad|Macintosh/.test(window?.navigator.userAgent))));
}
function isHTMLElement$1(element) {
    return element instanceof HTMLElement;
}
function isElement$2(element) {
    return element instanceof Element;
}
function isNotNull(value) {
    return value !== null;
}

/**
 * A no operation function (does nothing)
 */
function noop$1() { }

function createId$1(prefixOrUid, uid) {
    return `bits-${prefixOrUid}`;
}

class StateMachine {
    state;
    #machine;
    constructor(initialState, machine) {
        this.state = simpleBox(initialState);
        this.#machine = machine;
        this.dispatch = this.dispatch.bind(this);
    }
    #reducer(event) {
        // @ts-expect-error  state.current is keyof M
        const nextState = this.#machine[this.state.current][event];
        return nextState ?? this.state.current;
    }
    dispatch(event) {
        this.state.current = this.#reducer(event);
    }
}

/* presence.svelte.js generated by Svelte v5.39.6 */

const presenceMachine = {
	mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
	unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
	unmounted: { MOUNT: "mounted" }
};

class Presence {
	opts;
	prevAnimationNameState = "none";
	styles = {};
	initialStatus;
	previousPresent;
	machine;
	present;

	constructor(opts) {
		this.opts = opts;
		this.present = this.opts.open;
		this.initialStatus = opts.open.current ? "mounted" : "unmounted";
		this.previousPresent = new Previous(() => this.present.current);
		this.machine = new StateMachine(this.initialStatus, presenceMachine);
		this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
		this.handleAnimationStart = this.handleAnimationStart.bind(this);
		watchPresenceChange(this);
		watchStatusChange(this);
		watchRefChange(this);
	}

	/**
	 * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
	 * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
	 * make sure we only trigger ANIMATION_END for the currently active animation.
	 */
	handleAnimationEnd(event) {
		if (!this.opts.ref.current) return;

		const currAnimationName = getAnimationName(this.opts.ref.current);
		const isCurrentAnimation = currAnimationName.includes(event.animationName) || currAnimationName === "none";

		if (event.target === this.opts.ref.current && isCurrentAnimation) {
			this.machine.dispatch("ANIMATION_END");
		}
	}

	handleAnimationStart(event) {
		if (!this.opts.ref.current) return;

		if (event.target === this.opts.ref.current) {
			this.prevAnimationNameState = getAnimationName(this.opts.ref.current);
		}
	}

	#isPresent = derived(() => {
		return ["mounted", "unmountSuspended"].includes(this.machine.state.current);
	});

	get isPresent() {
		return this.#isPresent();
	}

	set isPresent($$value) {
		return this.#isPresent($$value);
	}
}

function watchPresenceChange(state) {
	watch$1(() => state.present.current, () => {
		if (!state.opts.ref.current) return;

		const hasPresentChanged = state.present.current !== state.previousPresent.current;

		if (!hasPresentChanged) return;

		const prevAnimationName = state.prevAnimationNameState;
		const currAnimationName = getAnimationName(state.opts.ref.current);

		if (state.present.current) {
			state.machine.dispatch("MOUNT");
		} else if (currAnimationName === "none" || state.styles.display === "none") {
			// If there is no exit animation or the element is hidden, animations won't run
			// so we unmount instantly
			state.machine.dispatch("UNMOUNT");
		} else {
			/**
			 * When `present` changes to `false`, we check changes to animation-name to
			 * determine whether an animation has started. We chose this approach (reading
			 * computed styles) because there is no `animationrun` event and `animationstart`
			 * fires after `animation-delay` has expired which would be too late.
			 */
			const isAnimating = prevAnimationName !== currAnimationName;

			if (state.previousPresent.current && isAnimating) {
				state.machine.dispatch("ANIMATION_OUT");
			} else {
				state.machine.dispatch("UNMOUNT");
			}
		}
	});
}

function watchStatusChange(state) {
	watch$1(() => state.machine.state.current, () => {
		if (!state.opts.ref.current) return;

		const currAnimationName = getAnimationName(state.opts.ref.current);

		state.prevAnimationNameState = state.machine.state.current === "mounted" ? currAnimationName : "none";
	});
}

function watchRefChange(state) {
	watch$1(() => state.opts.ref.current, () => {
		if (!state.opts.ref.current) return;

		state.styles = getComputedStyle(state.opts.ref.current);

		return executeCallbacks$1(on(state.opts.ref.current, "animationstart", state.handleAnimationStart), on(state.opts.ref.current, "animationcancel", state.handleAnimationEnd), on(state.opts.ref.current, "animationend", state.handleAnimationEnd));
	});
}

function getAnimationName(node) {
	return node
		? getComputedStyle(node).animationName || "none"
		: "none";
}

function Presence_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open, forceMount, presence, ref } = $$props;
		const presenceState = new Presence({ open: boxWith$1(() => open), ref });

		if (forceMount || open || presenceState.isPresent) {
			$$renderer.push('<!--[-->');
			presence?.($$renderer, { present: presenceState.isPresent });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

class AnimationsComplete {
    #opts;
    #currentFrame = undefined;
    #isRunning = false;
    constructor(opts) {
        this.#opts = opts;
    }
    #cleanup() {
        if (this.#currentFrame) {
            window.cancelAnimationFrame(this.#currentFrame);
            this.#currentFrame = undefined;
        }
        this.#isRunning = false;
    }
    run(fn) {
        // prevent multiple concurrent runs
        if (this.#isRunning)
            return;
        this.#cleanup();
        this.#isRunning = true;
        const node = this.#opts.ref.current;
        if (!node) {
            this.#isRunning = false;
            return;
        }
        if (typeof node.getAnimations !== "function") {
            this.#executeCallback(fn);
            return;
        }
        this.#currentFrame = window.requestAnimationFrame(() => {
            const animations = node.getAnimations();
            if (animations.length === 0) {
                this.#executeCallback(fn);
                return;
            }
            Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
                this.#executeCallback(fn);
            });
        });
    }
    #executeCallback(fn) {
        const execute = () => {
            fn();
            this.#isRunning = false;
        };
        if (this.#opts.afterTick) {
            afterTick$1(execute);
        }
        else {
            execute();
        }
    }
}

class OpenChangeComplete {
    #opts;
    #enabled;
    #afterAnimations;
    constructor(opts) {
        this.#opts = opts;
        this.#enabled = opts.enabled ?? true;
        this.#afterAnimations = new AnimationsComplete({
            ref: this.#opts.ref,
            afterTick: this.#opts.open,
        });
        watch$1([() => this.#opts.open.current], ([open]) => {
            if (!this.#enabled)
                return;
            this.#afterAnimations.run(() => {
                if (open === this.#opts.open.current) {
                    this.#opts.onComplete();
                }
            });
        });
    }
}

/* dialog.svelte.js generated by Svelte v5.39.6 */

const dialogAttrs = createBitsAttrs({
	component: "dialog",

	parts: [
		"content",
		"trigger",
		"overlay",
		"title",
		"description",
		"close",
		"cancel",
		"action"
	]
});

const DialogRootContext = new Context$2("Dialog.Root | AlertDialog.Root");

class DialogRootState {
	static create(opts) {
		return DialogRootContext.set(new DialogRootState(opts));
	}

	opts;
	triggerNode = null;
	contentNode = null;
	descriptionNode = null;
	contentId = undefined;
	titleId = undefined;
	triggerId = undefined;
	descriptionId = undefined;
	cancelNode = null;

	constructor(opts) {
		this.opts = opts;
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);

		new OpenChangeComplete({
			ref: boxWith$1(() => this.contentNode),
			open: this.opts.open,
			enabled: true,

			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
	}

	handleOpen() {
		if (this.opts.open.current) return;

		this.opts.open.current = true;
	}

	handleClose() {
		if (!this.opts.open.current) return;

		this.opts.open.current = false;
	}

	getBitsAttr = (part) => {
		return dialogAttrs.getAttr(part, this.opts.variant.current);
	};

	#sharedProps = derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));

	get sharedProps() {
		return this.#sharedProps();
	}

	set sharedProps($$value) {
		return this.#sharedProps($$value);
	}
}

class DialogTriggerState {
	static create(opts) {
		return new DialogTriggerState(opts, DialogRootContext.get());
	}

	opts;
	root;
	attachment;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;

		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.triggerNode = v;
			this.root.triggerId = v?.id;
		});

		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}

	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button > 0) return;

		this.root.handleOpen();
	}

	onkeydown(e) {
		if (this.opts.disabled.current) return;

		if (e.key === SPACE || e.key === ENTER) {
			e.preventDefault();
			this.root.handleOpen();
		}
	}

	#props = derived(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"aria-controls": this.root.contentId,
		[this.root.getBitsAttr("trigger")]: "",
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		disabled: this.opts.disabled.current ? true : undefined,
		...this.root.sharedProps,
		...this.attachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}
}

class DialogContentState {
	static create(opts) {
		return new DialogContentState(opts, DialogRootContext.get());
	}

	opts;
	root;
	attachment;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;

		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.contentNode = v;
			this.root.contentId = v?.id;
		});
	}

	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));

	get snippetProps() {
		return this.#snippetProps();
	}

	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}

	#props = derived(() => ({
		id: this.opts.id.current,
		role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
		"aria-modal": "true",
		"aria-describedby": this.root.descriptionId,
		"aria-labelledby": this.root.titleId,
		[this.root.getBitsAttr("content")]: "",

		style: {
			pointerEvents: "auto",
			outline: this.root.opts.variant.current === "alert-dialog" ? "none" : undefined
		},

		tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : undefined,
		...this.root.sharedProps,
		...this.attachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}
}

class DialogOverlayState {
	static create(opts) {
		return new DialogOverlayState(opts, DialogRootContext.get());
	}

	opts;
	root;
	attachment;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}

	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));

	get snippetProps() {
		return this.#snippetProps();
	}

	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}

	#props = derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("overlay")]: "",
		style: { pointerEvents: "auto" },
		...this.root.sharedProps,
		...this.attachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}
}

const BitsConfigContext = new Context$2("BitsConfig");
/**
 * Gets the current Bits UI configuration state from the context.
 *
 * Returns a default configuration (where all values are `undefined`) if no configuration is found.
 */
function getBitsConfig() {
    const fallback = new BitsConfigState(null, {});
    return BitsConfigContext.getOr(fallback).opts;
}
/**
 * Configuration state that inherits from parent configurations.
 *
 * @example
 * Config resolution:
 * ```
 * Level 1: { defaultPortalTo: "#some-element", theme: "dark" }
 * Level 2: { spacing: "large" } // inherits defaultPortalTo="#some-element", theme="dark"
 * Level 3: { theme: "light" }   // inherits defaultPortalTo="#some-element", spacing="large", overrides theme="light"
 * ```
 */
class BitsConfigState {
    opts;
    constructor(parent, opts) {
        const resolveConfigOption = createConfigResolver(parent, opts);
        this.opts = {
            defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
            defaultLocale: resolveConfigOption((config) => config.defaultLocale),
        };
    }
}
/**
 * Returns a config resolver that resolves a given config option's value.
 *
 * The resolver creates reactive boxes that resolve config option values using this priority:
 * 1. Current level's value (if defined)
 * 2. Parent level's value (if defined and current is undefined)
 * 3. `undefined` (if no value is found in either parent or child)
 *
 * @param parent - Parent configuration state (null if this is root level)
 * @param currentOpts - Current level's configuration options
 *
 * @example
 * ```typescript
 * // Given this hierarchy:
 * // Root: { defaultPortalTo: "#some-element" }
 * // Child: { someOtherProp: "value" } // no defaultPortalTo specified
 *
 * const resolveConfigOption = createConfigResolver(parent, opts);
 * const portalTo = resolveConfigOption(config => config.defaultPortalTo);
 *
 * // portalTo.current === "#some-element" (inherited from parent)
 * // even when child didn't specify `defaultPortalTo`
 * ```
 */
function createConfigResolver(parent, currentOpts) {
    return (getter) => {
        const configOption = boxWith$1(() => {
            // try current opts first
            const value = getter(currentOpts)?.current;
            if (value !== undefined)
                return value;
            // if no parent, return undefined
            if (parent === null)
                return undefined;
            // get value from parent (which already has its own chain resolved)
            return getter(parent.opts)?.current;
        });
        return configOption;
    };
}

/**
 * Creates a generic prop resolver that follows a standard priority chain:
 * 1. The getter's prop value (if defined)
 * 2. The config default value (if no getter prop value is defined)
 * 3. The fallback value (if no config value found)
 */
function createPropResolver(configOption, fallback) {
    return (getProp) => {
        const config = getBitsConfig();
        return boxWith$1(() => {
            // 1. return the prop's value, if provided
            const propValue = getProp();
            if (propValue !== undefined)
                return propValue;
            // 2. return the resolved config option value, if available
            const option = configOption(config).current;
            if (option !== undefined)
                return option;
            // 3. return the fallback if no other value is found
            return fallback;
        });
    };
}
/**
 * Resolves a portal's `to` value using the prop, the config default, or a fallback.
 *
 * Default value: `"body"`
 */
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");

function Portal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { to: toProp, children, disabled } = $$props;
		const to = resolvePortalToProp(() => toProp);
		getAllContexts();
		let target = getTarget();

		function getTarget() {
			if (!isBrowser$3 || disabled) return null;

			let localTarget = null;

			if (typeof to.current === "string") {
				const target = document.querySelector(to.current);

				localTarget = target;
			} else {
				localTarget = to.current;
			}

			return localTarget;
		}

		let instance;

		function unmountInstance() {
			if (instance) {
				unmount();
				instance = null;
			}
		}

		watch$1([() => target, () => disabled], ([target, disabled]) => {
			if (!target || disabled) {
				unmountInstance();

				return;
			}

			instance = mount();

			return () => {
				unmountInstance();
			};
		});

		if (disabled) {
			$$renderer.push('<!--[-->');
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

// oxlint-disable-next-line no-explicit-any
function debounce$1(fn, wait = 500) {
    let timeout = null;
    const debounced = (...args) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(...args);
        }, wait);
    };
    debounced.destroy = () => {
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    return debounced;
}

function isOrContainsTarget(node, target) {
    return node === target || node.contains(target);
}
function getOwnerDocument(el) {
    return el?.ownerDocument ?? document;
}

/**
 * Determines if the click event truly occurred outside the content node.
 * This was added to handle password managers and other elements that may be injected
 * into the DOM but visually appear inside the content.
 */
function isClickTrulyOutside(event, contentNode) {
    const { clientX, clientY } = event;
    const rect = contentNode.getBoundingClientRect();
    return (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom);
}

/* use-dismissable-layer.svelte.js generated by Svelte v5.39.6 */

globalThis.bitsDismissableLayers ??= new Map();

class DismissibleLayerState {
	static create(opts) {
		return new DismissibleLayerState(opts);
	}

	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: false };
	#isResponsibleLayer = false;
	#isFocusInsideDOMTree = false;
	#documentObj = undefined;
	#onFocusOutside;
	#unsubClickListener = noop$1;

	constructor(opts) {
		this.opts = opts;
		this.#behaviorType = opts.interactOutsideBehavior;
		this.#interactOutsideProp = opts.onInteractOutside;
		this.#onFocusOutside = opts.onFocusOutside;

		let unsubEvents = noop$1;

		const cleanup = () => {
			this.#resetState();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			unsubEvents();
		};

		watch$1([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!this.opts.enabled.current || !this.opts.ref.current) return;

			afterSleep$1(1, () => {
				if (!this.opts.ref.current) return;

				globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			});

			return cleanup;
		});
	}

	#handleFocus = (event) => {
		if (event.defaultPrevented) return;
		if (!this.opts.ref.current) return;

		afterTick$1(() => {
			if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;

			if (event.target && !this.#isFocusInsideDOMTree) {
				this.#onFocusOutside.current?.(event);
			}
		});
	};

	#addEventListeners() {
		return executeCallbacks$1(
			/**
			 * CAPTURE INTERACTION START
			 * mark interaction-start event as intercepted.
			 * mark responsible layer during interaction start
			 * to avoid checking if is responsible layer during interaction end
			 * when a new floating element may have been opened.
			 */
			on(this.#documentObj, "pointerdown", executeCallbacks$1(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
			/**
			 * BUBBLE INTERACTION START
			 * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
			 * to avoid prematurely checking if other events were intercepted.
			 */
			on(this.#documentObj, "pointerdown", executeCallbacks$1(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
			/**
			 * HANDLE FOCUS OUTSIDE
			 */
			on(this.#documentObj, "focusin", this.#handleFocus)
		);
	}

	#handleDismiss = (e) => {
		let event = e;

		if (event.defaultPrevented) {
			event = createWrappedEvent(e);
		}

		this.#interactOutsideProp.current(e);
	};

	#handleInteractOutside = debounce$1(
		(e) => {
			if (!this.opts.ref.current) {
				this.#unsubClickListener();

				return;
			}

			const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);

			if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
				this.#unsubClickListener();

				return;
			}

			let event = e;

			if (event.defaultPrevented) {
				event = createWrappedEvent(event);
			}

			if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
				this.#unsubClickListener();

				return;
			}

			if (e.pointerType === "touch") {
				this.#unsubClickListener();
				this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: true });
			} else {
				this.#interactOutsideProp.current(event);
			}
		},
		10
	);

	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = true;
	};

	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = false;
	};

	#markResponsibleLayer = () => {
		if (!this.opts.ref.current) return;

		this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
	};

	#isTargetWithinLayer = (target) => {
		if (!this.opts.ref.current) return false;

		return isOrContainsTarget(this.opts.ref.current, target);
	};

	#resetState = debounce$1(
		() => {
			for (const eventType in this.#interceptedEvents) {
				this.#interceptedEvents[eventType] = false;
			}

			this.#isResponsibleLayer = false;
		},
		20
	);

	#isAnyEventIntercepted() {
		const i = Object.values(this.#interceptedEvents).some(Boolean);

		return i;
	}

	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = true;
	};

	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = false;
	};

	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture
	};
}

function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
	return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}

function isResponsibleLayer(node) {
	const layersArr = [...globalThis.bitsDismissableLayers];

	/**
	 * We first check if we can find a top layer with `close` or `ignore`.
	 * If that top layer was found and matches the provided node, then the node is
	 * responsible for the outside interaction. Otherwise, we know that all layers defer so
	 * the first layer is the responsible one.
	 */
	const topMostLayer = getTopMostDismissableLayer(layersArr);

	if (topMostLayer) return topMostLayer[0].opts.ref.current === node;

	const [firstLayerNode] = layersArr[0];

	return firstLayerNode.opts.ref.current === node;
}

function isValidEvent(e, node) {
	if ("button" in e && e.button > 0) return false;

	const target = e.target;

	if (!isElement$2(target)) return false;

	const ownerDocument = getOwnerDocument(target);
	const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);

	return isValid;
}

function createWrappedEvent(e) {
	const capturedCurrentTarget = e.currentTarget;
	const capturedTarget = e.target;
	let newEvent;

	if (e instanceof PointerEvent) {
		newEvent = new PointerEvent(e.type, e);
	} else {
		newEvent = new PointerEvent("pointerdown", e);
	}

	// track the prevented state separately
	let isPrevented = false;

	// Create a proxy to intercept property access and method calls
	const wrappedEvent = new Proxy(newEvent, {
		get: (target, prop) => {
			if (prop === "currentTarget") {
				return capturedCurrentTarget;
			}

			if (prop === "target") {
				return capturedTarget;
			}

			if (prop === "preventDefault") {
				return () => {
					isPrevented = true;

					if (typeof target.preventDefault === "function") {
						target.preventDefault();
					}
				};
			}

			if (prop === "defaultPrevented") {
				return isPrevented;
			}

			if (prop in target) {
				// oxlint-disable-next-line no-explicit-any
				return target[prop];
			}

			// oxlint-disable-next-line no-explicit-any
			return e[prop];
		}
	});

	return wrappedEvent;
}

function Dismissible_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			interactOutsideBehavior = "close",
			onInteractOutside = noop$1,
			onFocusOutside = noop$1,
			id,
			children,
			enabled,
			isValidEvent = () => false,
			ref
		} = $$props;

		const dismissibleLayerState = DismissibleLayerState.create({
			id: boxWith$1(() => id),
			interactOutsideBehavior: boxWith$1(() => interactOutsideBehavior),
			onInteractOutside: boxWith$1(() => onInteractOutside),
			enabled: boxWith$1(() => enabled),
			onFocusOutside: boxWith$1(() => onFocusOutside),
			isValidEvent: boxWith$1(() => isValidEvent),
			ref
		});

		children?.($$renderer, { props: dismissibleLayerState.props });
		$$renderer.push(`<!---->`);
	});
}

/* use-escape-layer.svelte.js generated by Svelte v5.39.6 */

globalThis.bitsEscapeLayers ??= new Map();

class EscapeLayerState {
	static create(opts) {
		return new EscapeLayerState(opts);
	}

	opts;
	domContext;

	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);

		let unsubEvents = noop$1;

		watch$1(() => opts.enabled.current, (enabled) => {
			if (enabled) {
				globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
				unsubEvents = this.#addEventListener();
			}

			return () => {
				unsubEvents();
				globalThis.bitsEscapeLayers.delete(this);
			};
		});
	}

	#addEventListener = () => {
		return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
	};

	#onkeydown = (e) => {
		if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;

		const clonedEvent = new KeyboardEvent(e.type, e);

		e.preventDefault();

		const behaviorType = this.opts.escapeKeydownBehavior.current;

		if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;

		this.opts.onEscapeKeydown.current(clonedEvent);
	};
}

function isResponsibleEscapeLayer(instance) {
	const layersArr = [...globalThis.bitsEscapeLayers];

	/**
	 * We first check if we can find a top layer with `close` or `ignore`.
	 * If that top layer was found and matches the provided node, then the node is
	 * responsible for the escape. Otherwise, we know that all layers defer so
	 * the first layer is the responsible one.
	 */
	const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");

	if (topMostLayer) return topMostLayer[0] === instance;

	const [firstLayerNode] = layersArr[0];

	return firstLayerNode === instance;
}

function Escape_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			escapeKeydownBehavior = "close",
			onEscapeKeydown = noop$1,
			children,
			enabled,
			ref
		} = $$props;

		EscapeLayerState.create({
			escapeKeydownBehavior: boxWith$1(() => escapeKeydownBehavior),
			onEscapeKeydown: boxWith$1(() => onEscapeKeydown),
			enabled: boxWith$1(() => enabled),
			ref
		});

		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

class FocusScopeManager {
    static instance;
    #scopeStack = simpleBox([]);
    #focusHistory = new WeakMap();
    #preFocusHistory = new WeakMap();
    static getInstance() {
        if (!this.instance) {
            this.instance = new FocusScopeManager();
        }
        return this.instance;
    }
    register(scope) {
        const current = this.getActive();
        if (current && current !== scope) {
            current.pause();
        }
        // capture the currently focused element before this scope becomes active
        const activeElement = document.activeElement;
        if (activeElement && activeElement !== document.body) {
            this.#preFocusHistory.set(scope, activeElement);
        }
        this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
        this.#scopeStack.current.unshift(scope);
    }
    unregister(scope) {
        this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
        const next = this.getActive();
        if (next) {
            next.resume();
        }
    }
    getActive() {
        return this.#scopeStack.current[0];
    }
    setFocusMemory(scope, element) {
        this.#focusHistory.set(scope, element);
    }
    getFocusMemory(scope) {
        return this.#focusHistory.get(scope);
    }
    isActiveScope(scope) {
        return this.getActive() === scope;
    }
    setPreFocusMemory(scope, element) {
        this.#preFocusHistory.set(scope, element);
    }
    getPreFocusMemory(scope) {
        return this.#preFocusHistory.get(scope);
    }
    clearPreFocusMemory(scope) {
        this.#preFocusHistory.delete(scope);
    }
}

/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput$1 = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput$1(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput$1(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/* focus-scope.svelte.js generated by Svelte v5.39.6 */

class FocusScope {
	#paused = false;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;

	constructor(opts) {
		this.#opts = opts;
	}

	get paused() {
		return this.#paused;
	}

	pause() {
		this.#paused = true;
	}

	resume() {
		this.#paused = false;
	}

	#cleanup() {
		for (const fn of this.#cleanupFns) {
			fn();
		}

		this.#cleanupFns = [];
	}

	mount(container) {
		if (this.#container) {
			this.unmount();
		}

		this.#container = container;
		this.#manager.register(this);
		this.#setupEventListeners();
		this.#handleOpenAutoFocus();
	}

	unmount() {
		if (!this.#container) return;

		this.#cleanup();

		// handle close auto-focus
		this.#handleCloseAutoFocus();

		this.#manager.unregister(this);
		this.#manager.clearPreFocusMemory(this);
		this.#container = null;
	}

	#handleOpenAutoFocus() {
		if (!this.#container) return;

		const event = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });

		this.#opts.onOpenAutoFocus.current(event);

		if (!event.defaultPrevented) {
			requestAnimationFrame(() => {
				if (!this.#container) return;

				const firstTabbable = this.#getFirstTabbable();

				if (firstTabbable) {
					firstTabbable.focus();
					this.#manager.setFocusMemory(this, firstTabbable);
				} else {
					this.#container.focus();
				}
			});
		}
	}

	#handleCloseAutoFocus() {
		const event = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });

		this.#opts.onCloseAutoFocus.current?.(event);

		if (!event.defaultPrevented) {
			// return focus to the element that was focused before this scope opened
			const preFocusedElement = this.#manager.getPreFocusMemory(this);

			if (preFocusedElement && document.contains(preFocusedElement)) {
				// ensure the element is still focusable and in the document
				try {
					preFocusedElement.focus();
				} catch {
					// fallback if focus fails
					document.body.focus();
				}
			}
		}
	}

	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;

		const container = this.#container;
		const doc = container.ownerDocument;

		const handleFocus = (e) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;

			const target = e.target;

			if (!target) return;

			const isInside = container.contains(target);

			if (isInside) {
				// store last focused element
				this.#manager.setFocusMemory(this, target);
			} else {
				// focus escaped - bring it back
				const lastFocused = this.#manager.getFocusMemory(this);

				if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
					e.preventDefault();
					lastFocused.focus();
				} else {
					// fallback to first tabbable or first focusable or container
					const firstTabbable = this.#getFirstTabbable();

					const firstFocusable = this.#getAllFocusables()[0];

					(firstTabbable || firstFocusable || container).focus();
				}
			}
		};

		const handleKeydown = (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
			if (!this.#manager.isActiveScope(this)) return;

			const tabbables = this.#getTabbables();

			if (tabbables.length < 2) return;

			const first = tabbables[0];
			const last = tabbables[tabbables.length - 1];

			if (!e.shiftKey && doc.activeElement === last) {
				e.preventDefault();
				first.focus();
			} else if (e.shiftKey && doc.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		};

		this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));

		const observer = new MutationObserver(() => {
			const lastFocused = this.#manager.getFocusMemory(this);

			if (lastFocused && !container.contains(lastFocused)) {
				// last focused element was removed
				const firstTabbable = this.#getFirstTabbable();

				const firstFocusable = this.#getAllFocusables()[0];
				const elementToFocus = firstTabbable || firstFocusable;

				if (elementToFocus) {
					elementToFocus.focus();
					this.#manager.setFocusMemory(this, elementToFocus);
				} else {
					// no focusable elements left, focus container
					container.focus();
				}
			}
		});

		observer.observe(container, { childList: true, subtree: true });
		this.#cleanupFns.push(() => observer.disconnect());
	}

	#getTabbables() {
		if (!this.#container) return [];

		return tabbable(this.#container, { includeContainer: false, getShadowRoot: true });
	}

	#getFirstTabbable() {
		const tabbables = this.#getTabbables();

		return tabbables[0] || null;
	}

	#getAllFocusables() {
		if (!this.#container) return [];

		return focusable(this.#container, { includeContainer: false, getShadowRoot: true });
	}

	static use(opts) {
		let scope = null;

		watch$1([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
			if (ref && enabled) {
				if (!scope) {
					scope = new FocusScope(opts);
				}

				scope.mount(ref);
			} else if (scope) {
				scope.unmount();
				scope = null;
			}
		});

		return {
			get props() {
				return { tabindex: -1 };
			}
		};
	}
}

function Focus_scope($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			enabled = false,
			trapFocus = false,
			loop = false,
			onCloseAutoFocus = noop$1,
			onOpenAutoFocus = noop$1,
			focusScope,
			ref
		} = $$props;

		const focusScopeState = FocusScope.use({
			enabled: boxWith$1(() => enabled),
			trap: boxWith$1(() => trapFocus),
			loop,
			onCloseAutoFocus: boxWith$1(() => onCloseAutoFocus),
			onOpenAutoFocus: boxWith$1(() => onOpenAutoFocus),
			ref
		});

		focusScope?.($$renderer, { props: focusScopeState.props });
		$$renderer.push(`<!---->`);
	});
}

/* use-text-selection-layer.svelte.js generated by Svelte v5.39.6 */

globalThis.bitsTextSelectionLayers ??= new Map();

class TextSelectionLayerState {
	static create(opts) {
		return new TextSelectionLayerState(opts);
	}

	opts;
	domContext;
	#unsubSelectionLock = noop$1;

	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(opts.ref);

		let unsubEvents = noop$1;

		watch$1(() => this.opts.enabled.current, (isEnabled) => {
			if (isEnabled) {
				globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			}

			return () => {
				unsubEvents();
				this.#resetSelectionLock();
				globalThis.bitsTextSelectionLayers.delete(this);
			};
		});
	}

	#addEventListeners() {
		return executeCallbacks$1(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers$1(this.#resetSelectionLock, this.opts.onPointerUp.current)));
	}

	#pointerdown = (e) => {
		const node = this.opts.ref.current;
		const target = e.target;

		if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !this.opts.enabled.current) return;

		/**
		 * We only lock user-selection overflow if layer is the top most layer and
		 * pointerdown occurred inside the node. You are still allowed to select text
		 * outside the node provided pointerdown occurs outside the node.
		 */
		if (!isHighestLayer(this) || !contains(node, target)) return;

		this.opts.onPointerDown.current(e);

		if (e.defaultPrevented) return;

		this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
	};

	#resetSelectionLock = () => {
		this.#unsubSelectionLock();
		this.#unsubSelectionLock = noop$1;
	};
}

const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;

function preventTextSelectionOverflow(node, body) {
	const originalBodyUserSelect = getUserSelect(body);
	const originalNodeUserSelect = getUserSelect(node);

	setUserSelect(body, "none");
	setUserSelect(node, "text");

	return () => {
		setUserSelect(body, originalBodyUserSelect);
		setUserSelect(node, originalNodeUserSelect);
	};
}

function setUserSelect(node, value) {
	node.style.userSelect = value;
	node.style.webkitUserSelect = value;
}

function isHighestLayer(instance) {
	const layersArr = [...globalThis.bitsTextSelectionLayers];

	if (!layersArr.length) return false;

	const highestLayer = layersArr.at(-1);

	if (!highestLayer) return false;

	return highestLayer[0] === instance;
}

function Text_selection_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			preventOverflowTextSelection = true,
			onPointerDown = noop$1,
			onPointerUp = noop$1,
			id,
			children,
			enabled,
			ref
		} = $$props;

		TextSelectionLayerState.create({
			id: boxWith$1(() => id),
			onPointerDown: boxWith$1(() => onPointerDown),
			onPointerUp: boxWith$1(() => onPointerUp),
			enabled: boxWith$1(() => enabled && preventOverflowTextSelection),
			ref
		});

		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

globalThis.bitsIdCounter ??= { current: 0 };
/**
 * Generates a unique ID based on a global counter.
 */
function useId$1(prefix = "bits") {
    globalThis.bitsIdCounter.current++;
    return `${prefix}-${globalThis.bitsIdCounter.current}`;
}

/* shared-state.svelte.js generated by Svelte v5.39.6 */

class SharedState {
	#factory;
	#subscribers = 0;
	#state;
	#scope;

	constructor(factory) {
		this.#factory = factory;
	}

	#dispose() {
		this.#subscribers -= 1;

		if (this.#scope && this.#subscribers <= 0) {
			this.#scope();
			this.#state = undefined;
			this.#scope = undefined;
		}
	}

	get(...args) {
		this.#subscribers += 1;

		if (this.#state === undefined) {
			this.#scope = () => {};
		}

		return this.#state;
	}
}

/* body-scroll-lock.svelte.js generated by Svelte v5.39.6 */

const lockMap = new SvelteMap();
let initialBodyStyle = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;

const anyLocked = boxWith$1(() => {
	for (const value of lockMap.values()) {
		if (value) return true;
	}

	return false;
});

/**
 * We track the time we scheduled the cleanup to prevent race conditions
 * when multiple locks are created/destroyed in the same tick, ensuring
 * only the last one to schedule the cleanup will run.
 *
 * reference: https://github.com/huntabyte/bits-ui/issues/1639
 */
let cleanupScheduledAt = null;

const bodyLockStackCount = new SharedState(() => {
	function resetBodyStyle() {
		return;
	}

	function cancelPendingCleanup() {
		if (cleanupTimeoutId === null) return;

		window.clearTimeout(cleanupTimeoutId);
		cleanupTimeoutId = null;
	}

	function scheduleCleanupIfNoNewLocks(delay, callback) {
		cancelPendingCleanup();
		isInCleanupTransition = true;
		cleanupScheduledAt = Date.now();

		const currentCleanupId = cleanupScheduledAt;

		/**
		 * We schedule the cleanup to run after a delay to allow new locks to register
		 * that might have been added in the same tick as the current cleanup.
		 *
		 * If a new lock is added in the same tick, the cleanup will be cancelled and
		 * a new cleanup will be scheduled.
		 *
		 * This is to prevent the cleanup from running too early and resetting the body
		 * style before the new lock has had a chance to apply its styles.
		 */
		const cleanupFn = () => {
			cleanupTimeoutId = null;

			// check if this cleanup is still valid (no newer cleanups scheduled)
			if (cleanupScheduledAt !== currentCleanupId) return;

			// ensure no new locks were added during the delay
			if (!isAnyLocked(lockMap)) {
				isInCleanupTransition = false;
				callback();
			} else {
				isInCleanupTransition = false;
			}
		};

		const actualDelay = delay === null ? 24 : delay;

		cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
	}

	function ensureInitialStyleCaptured() {
		// only capture initial style once, when no locks exist and no cleanup is in progress
		if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) {
			initialBodyStyle = document.body.getAttribute("style");
		}
	}

	watch$1(() => anyLocked.current, () => {
		if (!anyLocked.current) return;

		// ensure we've captured the initial style before applying any lock styles
		ensureInitialStyleCaptured();

		// if we're applying lock styles, we're no longer in a cleanup transition
		isInCleanupTransition = false;

		const bodyStyle = getComputedStyle(document.body);

		// TODO: account for RTL direction, etc.
		const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);

		const config = {
			padding: paddingRight + verticalScrollbarWidth,
			margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
		};

		if (verticalScrollbarWidth > 0) {
			document.body.style.paddingRight = `${config.padding}px`;
			document.body.style.marginRight = `${config.margin}px`;
			document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
			document.body.style.overflow = "hidden";
		}

		if (isIOS$1) {
			// IOS devices are special and require a touchmove listener to prevent scrolling
			on(
				document,
				"touchmove",
				(e) => {
					if (e.target !== document.documentElement) return;
					if (e.touches.length > 1) return;

					e.preventDefault();
				},
				{ passive: false }
			);
		}

		/**
		 * We ensure pointer-events: none is applied _after_ DOM updates, so that any focus/
		 * interaction changes from opening overlays/menus complete _before_ we block pointer
		 * events.
		 *
		 * this avoids race conditions where pointer-events could be set too early and break
		 * focus/interaction.
		 */
		afterTick$1(() => {
			document.body.style.pointerEvents = "none";
			document.body.style.overflow = "hidden";
		});
	});

	return {
		get lockMap() {
			return lockMap;
		},

		resetBodyStyle,
		scheduleCleanupIfNoNewLocks,
		cancelPendingCleanup,
		ensureInitialStyleCaptured
	};
});

class BodyScrollLock {
	#id = useId$1();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;

	constructor(initialState, restoreScrollDelay = () => null) {
		this.#initialState = initialState;
		this.#restoreScrollDelay = restoreScrollDelay;
		this.#countState = bodyLockStackCount.get();

		if (!this.#countState) return;

		/**
		 * Since a new lock is being created, we cancel any pending cleanup to
		 * prevent the cleanup from running too early and resetting the body style
		 * before the new lock has had a chance to apply its styles.
		 *
		 * reference: https://github.com/huntabyte/bits-ui/issues/1639
		 */
		this.#countState.cancelPendingCleanup();

		// capture initial style before this lock is registered
		this.#countState.ensureInitialStyleCaptured();

		this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
		this.locked = boxWith$1(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
	}
}

function isAnyLocked(map) {
	for (const [_, value] of map) {
		if (value) return true;
	}

	return false;
}

function Scroll_lock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { preventScroll = true, restoreScrollDelay = null } = $$props;

		if (preventScroll) {
			new BodyScrollLock(preventScroll, () => restoreScrollDelay);
		}
	});
}

function shouldEnableFocusTrap({ forceMount, present, open, }) {
    if (forceMount)
        return open;
    return present && open;
}

function Dialog_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);

		let {
			id = createId$1(uid),
			forceMount = false,
			child,
			children,
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const overlayState = DialogOverlayState.create({
			id: boxWith$1(() => id),
			ref: boxWith$1(() => ref, (v) => ref = v)
		});

		const mergedProps = mergeProps$1(restProps, overlayState.props);

		{
			function presence($$renderer) {
				if (child) {
					$$renderer.push('<!--[-->');
					child($$renderer, { props: mergeProps$1(mergedProps), ...overlayState.snippetProps });
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`<div${attributes({ ...mergeProps$1(mergedProps) })}>`);
					children?.($$renderer, overlayState.snippetProps);
					$$renderer.push(`<!----></div>`);
				}

				$$renderer.push(`<!--]-->`);
			}

			Presence_layer($$renderer, {
				open: overlayState.root.opts.open.current || forceMount,
				ref: overlayState.opts.ref,
				presence});
		}

		bind_props($$props, { ref });
	});
}

function Dialog_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);

		let {
			id = createId$1(uid),
			ref = null,
			children,
			child,
			disabled = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const triggerState = DialogTriggerState.create({
			id: boxWith$1(() => id),
			ref: boxWith$1(() => ref, (v) => ref = v),
			disabled: boxWith$1(() => Boolean(disabled))
		});

		const mergedProps = mergeProps$1(restProps, triggerState.props);

		if (child) {
			$$renderer.push('<!--[-->');
			child($$renderer, { props: mergedProps });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push(`<button${attributes({ ...mergedProps })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement$1(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement$1(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement$1(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement$1(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement$1(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement$1(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement$1(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, []).filter(el => isElement$1(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement$1(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement$1,
  isRTL
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = hide$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = limitShift$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/* floating-utils.svelte.js generated by Svelte v5.39.6 */

function get$1(valueOrGetValue) {
	return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}

function getDPR(element) {
	if (typeof window === "undefined") return 1;

	const win = element.ownerDocument.defaultView || window;

	return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
	const dpr = getDPR(element);

	return Math.round(value * dpr) / dpr;
}

function getFloatingContentCSSVars(name) {
	return {
		[`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
	};
}

/* use-floating.svelte.js generated by Svelte v5.39.6 */

function useFloating(options) {

	const openOption = get$1(options.open) ?? true;
	const middlewareOption = get$1(options.middleware);
	const transformOption = get$1(options.transform) ?? true;
	const placementOption = get$1(options.placement) ?? "bottom";
	const strategyOption = get$1(options.strategy) ?? "absolute";
	const sideOffsetOption = get$1(options.sideOffset) ?? 0;
	const alignOffsetOption = get$1(options.alignOffset) ?? 0;
	const reference = options.reference;

	/** State */
	let x = 0;

	let y = 0;
	const floating = simpleBox(null);

	// svelte-ignore state_referenced_locally
	let strategy = strategyOption;

	// svelte-ignore state_referenced_locally
	let placement = placementOption;

	let middlewareData = {};
	let isPositioned = false;

	const floatingStyles = (() => {
		// preserve last known position when floating ref is null (during transitions)
		const xVal = floating.current ? roundByDPR(floating.current, x) : x;

		const yVal = floating.current ? roundByDPR(floating.current, y) : y;

		if (transformOption) {
			return {
				position: strategy,
				left: "0",
				top: "0",
				transform: `translate(${xVal}px, ${yVal}px)`,
				...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
			};
		}

		return { position: strategy, left: `${xVal}px`, top: `${yVal}px` };
	})();

	function update() {
		if (reference.current === null || floating.current === null) return;

		computePosition(reference.current, floating.current, {
			middleware: middlewareOption,
			placement: placementOption,
			strategy: strategyOption
		}).then((position) => {
			// ignore bad coordinates that cause jumping during close transitions
			if (!openOption && x !== 0 && y !== 0) {
				// if we had a good position and now getting coordinates near
				// the expected offset bounds during close, ignore it
				const maxExpectedOffset = Math.max(Math.abs(sideOffsetOption), Math.abs(alignOffsetOption), 15);

				if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
			}

			x = position.x;
			y = position.y;
			strategy = position.strategy;
			placement = position.placement;
			middlewareData = position.middlewareData;
			isPositioned = true;
		});
	}

	return {
		floating,
		reference,

		get strategy() {
			return strategy;
		},

		get placement() {
			return placement;
		},

		get middlewareData() {
			return middlewareData;
		},

		get isPositioned() {
			return isPositioned;
		},

		get floatingStyles() {
			return floatingStyles;
		},

		get update() {
			return update;
		}
	};
}

/* use-floating-layer.svelte.js generated by Svelte v5.39.6 */

const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context$2("Floating.Root");
const FloatingContentContext = new Context$2("Floating.Content");
const FloatingTooltipRootContext = new Context$2("Floating.Root");

class FloatingRootState {
	static create(tooltip = false) {
		return tooltip
			? FloatingTooltipRootContext.set(new FloatingRootState())
			: FloatingRootContext.set(new FloatingRootState());
	}

	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);

	constructor() {}
}

class FloatingContentState {
	static create(opts, tooltip = false) {
		return tooltip
			? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get()))
			: FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
	}

	opts;
	root;

	// nodes
	contentRef = simpleBox(null);

	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);

	// ids
	arrowId = simpleBox(useId$1());

	#transformedStyle = derived(() => {
		if (typeof this.opts.style === "string") return cssToStyleObj$1(this.opts.style);
		if (!this.opts.style) return {};
	});

	#updatePositionStrategy = undefined;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? undefined);
	#arrowWidth = derived(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = derived(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = derived(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));

	#boundary = derived(() => Array.isArray(this.opts.collisionBoundary.current)
		? this.opts.collisionBoundary.current
		: [this.opts.collisionBoundary.current]);

	#hasExplicitBoundaries = derived(() => this.#boundary().length > 0);

	get hasExplicitBoundaries() {
		return this.#hasExplicitBoundaries();
	}

	set hasExplicitBoundaries($$value) {
		return this.#hasExplicitBoundaries($$value);
	}

	#detectOverflowOptions = derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: this.#boundary().filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));

	get detectOverflowOptions() {
		return this.#detectOverflowOptions();
	}

	set detectOverflowOptions($$value) {
		return this.#detectOverflowOptions($$value);
	}

	#availableWidth = undefined;
	#availableHeight = undefined;
	#anchorWidth = undefined;
	#anchorHeight = undefined;

	#middleware = derived(() => [
		offset({
			mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
			alignmentAxis: this.opts.alignOffset.current
		}),

		this.opts.avoidCollisions.current && shift({
			mainAxis: true,
			crossAxis: false,
			limiter: this.opts.sticky.current === "partial" ? limitShift() : undefined,
			...this.detectOverflowOptions
		}),

		this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),

		size({
			...this.detectOverflowOptions,

			apply: ({ rects, availableWidth, availableHeight }) => {
				const { width: anchorWidth, height: anchorHeight } = rects.reference;

				this.#availableWidth = availableWidth;
				this.#availableHeight = availableHeight;
				this.#anchorWidth = anchorWidth;
				this.#anchorHeight = anchorHeight;
			}
		}),

		this.arrowRef.current && arrow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),

		transformOrigin({
			arrowWidth: this.#arrowWidth(),
			arrowHeight: this.#arrowHeight()
		}),

		this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
	].filter(Boolean));

	get middleware() {
		return this.#middleware();
	}

	set middleware($$value) {
		return this.#middleware($$value);
	}

	floating;
	#placedSide = derived(() => getSideFromPlacement(this.floating.placement));

	get placedSide() {
		return this.#placedSide();
	}

	set placedSide($$value) {
		return this.#placedSide($$value);
	}

	#placedAlign = derived(() => getAlignFromPlacement(this.floating.placement));

	get placedAlign() {
		return this.#placedAlign();
	}

	set placedAlign($$value) {
		return this.#placedAlign($$value);
	}

	#arrowX = derived(() => this.floating.middlewareData.arrow?.x ?? 0);

	get arrowX() {
		return this.#arrowX();
	}

	set arrowX($$value) {
		return this.#arrowX($$value);
	}

	#arrowY = derived(() => this.floating.middlewareData.arrow?.y ?? 0);

	get arrowY() {
		return this.#arrowY();
	}

	set arrowY($$value) {
		return this.#arrowY($$value);
	}

	#cannotCenterArrow = derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);

	get cannotCenterArrow() {
		return this.#cannotCenterArrow();
	}

	set cannotCenterArrow($$value) {
		return this.#cannotCenterArrow($$value);
	}

	contentZIndex;
	#arrowBaseSide = derived(() => OPPOSITE_SIDE[this.placedSide]);

	get arrowBaseSide() {
		return this.#arrowBaseSide();
	}

	set arrowBaseSide($$value) {
		return this.#arrowBaseSide($$value);
	}

	#wrapperProps = derived(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",

		style: {
			...this.floating.floatingStyles,

			transform: this.floating.isPositioned
				? this.floating.floatingStyles.transform
				: "translate(0, -200%)",

			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${this.#availableWidth}px`,
			"--bits-floating-available-height": `${this.#availableHeight}px`,
			"--bits-floating-anchor-width": `${this.#anchorWidth}px`,
			"--bits-floating-anchor-height": `${this.#anchorHeight}px`,
			...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
			...this.#transformedStyle()
		},

		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));

	get wrapperProps() {
		return this.#wrapperProps();
	}

	set wrapperProps($$value) {
		return this.#wrapperProps($$value);
	}

	#props = derived(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString$1({ ...this.#transformedStyle() }),
		...this.contentAttachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}

	#arrowStyle = derived(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : undefined,
		top: this.arrowY ? `${this.arrowY}px` : undefined,
		[this.arrowBaseSide]: 0,
		"transform-origin": ({ top: "", right: "0 0", bottom: "center 0", left: "100% 0" })[this.placedSide],

		transform: ({
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		})[this.placedSide],

		visibility: this.cannotCenterArrow ? "hidden" : undefined
	}));

	get arrowStyle() {
		return this.#arrowStyle();
	}

	set arrowStyle($$value) {
		return this.#arrowStyle($$value);
	}

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;

		if (opts.customAnchor) {
			this.root.customAnchorNode.current = opts.customAnchor.current;
		}

		watch$1(() => opts.customAnchor.current, (customAnchor) => {
			this.root.customAnchorNode.current = customAnchor;
		});

		this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => this.#desiredPlacement(),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,

			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		});

		watch$1(() => this.contentRef.current, (contentNode) => {
			if (!contentNode) return;

			const win = getWindow$1(contentNode);

			this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
		});
	}
}

class FloatingAnchorState {
	static create(opts, tooltip = false) {
		return tooltip
			? new FloatingAnchorState(opts, FloatingTooltipRootContext.get())
			: new FloatingAnchorState(opts, FloatingRootContext.get());
	}

	opts;
	root;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;

		if (opts.virtualEl && opts.virtualEl.current) {
			root.triggerNode = boxFrom$1(opts.virtualEl.current);
		} else {
			root.triggerNode = opts.ref;
		}
	}
}

//
// HELPERS
//
function transformOrigin(options) {
	return {
		name: "transformOrigin",
		options,

		fn(data) {
			const { placement, rects, middlewareData } = data;
			const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
			const isArrowHidden = cannotCenterArrow;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = ({ start: "0%", center: "50%", end: "100%" })[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";

			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}

			return { data: { x, y } };
		}
	};
}

function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");

	return [side, align];
}

function getSideFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[0];
}

function getAlignFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[1];
}

function Floating_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, tooltip = false } = $$props;

		FloatingRootState.create(tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

function Floating_layer_anchor($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id, children, virtualEl, ref, tooltip = false } = $$props;

		FloatingAnchorState.create(
			{
				id: boxWith$1(() => id),
				virtualEl: boxWith$1(() => virtualEl),
				ref
			},
			tooltip
		);

		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

function Floating_layer_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			content,
			side = "bottom",
			sideOffset = 0,
			align = "center",
			alignOffset = 0,
			id,
			arrowPadding = 0,
			avoidCollisions = true,
			collisionBoundary = [],
			collisionPadding = 0,
			hideWhenDetached = false,
			onPlaced = () => {},
			sticky = "partial",
			updatePositionStrategy = "optimized",
			strategy = "fixed",
			dir = "ltr",
			style = {},
			wrapperId = useId$1(),
			customAnchor = null,
			enabled,
			tooltip = false
		} = $$props;

		const contentState = FloatingContentState.create(
			{
				side: boxWith$1(() => side),
				sideOffset: boxWith$1(() => sideOffset),
				align: boxWith$1(() => align),
				alignOffset: boxWith$1(() => alignOffset),
				id: boxWith$1(() => id),
				arrowPadding: boxWith$1(() => arrowPadding),
				avoidCollisions: boxWith$1(() => avoidCollisions),
				collisionBoundary: boxWith$1(() => collisionBoundary),
				collisionPadding: boxWith$1(() => collisionPadding),
				hideWhenDetached: boxWith$1(() => hideWhenDetached),
				onPlaced: boxWith$1(() => onPlaced),
				sticky: boxWith$1(() => sticky),
				updatePositionStrategy: boxWith$1(() => updatePositionStrategy),
				strategy: boxWith$1(() => strategy),
				dir: boxWith$1(() => dir),
				style: boxWith$1(() => style),
				enabled: boxWith$1(() => enabled),
				wrapperId: boxWith$1(() => wrapperId),
				customAnchor: boxWith$1(() => customAnchor)
			},
			tooltip
		);

		const mergedProps = mergeProps$1(contentState.wrapperProps, { style: { pointerEvents: "auto" } });

		content?.($$renderer, { props: contentState.props, wrapperProps: mergedProps });
		$$renderer.push(`<!---->`);
	});
}

function Floating_layer_content_static($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { content} = $$props;

		content?.($$renderer, { props: {}, wrapperProps: {} });
		$$renderer.push(`<!---->`);
	});
}

function Popper_content($$renderer, $$props) {
	let {
		content,
		isStatic = false,
		onPlaced,
		$$slots,
		$$events,
		...restProps
	} = $$props;

	if (isStatic) {
		$$renderer.push('<!--[-->');
		Floating_layer_content_static($$renderer, { content});
	} else {
		$$renderer.push('<!--[!-->');
		Floating_layer_content($$renderer, spread_props([{ content, onPlaced }, restProps]));
	}

	$$renderer.push(`<!--]-->`);
}

function Popper_layer_inner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			popper,
			onEscapeKeydown,
			escapeKeydownBehavior,
			preventOverflowTextSelection,
			id,
			onPointerDown,
			onPointerUp,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			preventScroll,
			wrapperId,
			style,
			onPlaced,
			onInteractOutside,
			onCloseAutoFocus,
			onOpenAutoFocus,
			onFocusOutside,
			interactOutsideBehavior = "close",
			loop,
			trapFocus = true,
			isValidEvent = () => false,
			customAnchor = null,
			isStatic = false,
			enabled,
			ref,
			tooltip = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		{
			function content($$renderer, { props: floatingProps, wrapperProps }) {
				if (restProps.forceMount && enabled) {
					$$renderer.push('<!--[-->');
					Scroll_lock($$renderer, { preventScroll });
				} else {
					$$renderer.push('<!--[!-->');

					if (!restProps.forceMount) {
						$$renderer.push('<!--[-->');
						Scroll_lock($$renderer, { preventScroll });
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]-->`);
				}

				$$renderer.push(`<!--]--> `);

				{
					function focusScope($$renderer, { props: focusScopeProps }) {
						Escape_layer($$renderer, {
							onEscapeKeydown,
							escapeKeydownBehavior,
							enabled,
							ref,

							children: ($$renderer) => {
								{
									function children($$renderer, { props: dismissibleProps }) {
										Text_selection_layer($$renderer, {
											id,
											preventOverflowTextSelection,
											onPointerDown,
											onPointerUp,
											enabled,
											ref,

											children: ($$renderer) => {
												popper?.($$renderer, {
													props: mergeProps$1(restProps, floatingProps, dismissibleProps, focusScopeProps, { style: { pointerEvents: "auto" } }),
													wrapperProps
												});

												$$renderer.push(`<!---->`);
											}});
									}

									Dismissible_layer($$renderer, {
										id,
										onInteractOutside,
										onFocusOutside,
										interactOutsideBehavior,
										isValidEvent,
										enabled,
										ref,
										children});
								}
							}});
					}

					Focus_scope($$renderer, {
						onOpenAutoFocus,
						onCloseAutoFocus,
						loop,
						enabled,
						trapFocus,
						forceMount: restProps.forceMount,
						ref,
						focusScope});
				}

				$$renderer.push(`<!---->`);
			}

			Popper_content($$renderer, {
				isStatic,
				id,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				avoidCollisions,
				collisionBoundary,
				collisionPadding,
				sticky,
				hideWhenDetached,
				updatePositionStrategy,
				strategy,
				dir,
				wrapperId,
				style,
				onPlaced,
				customAnchor,
				enabled,
				tooltip,
				content,
				$$slots: { content: true }
			});
		}
	});
}

function Popper_layer($$renderer, $$props) {
	let {
		popper,
		open,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = "close",
		loop,
		trapFocus = true,
		isValidEvent = () => false,
		customAnchor = null,
		isStatic = false,
		ref,
		$$slots,
		$$events,
		...restProps
	} = $$props;

	{
		function presence($$renderer) {
			Popper_layer_inner($$renderer, spread_props([
				{
					popper,
					onEscapeKeydown,
					escapeKeydownBehavior,
					preventOverflowTextSelection,
					id,
					onPointerDown,
					onPointerUp,
					side,
					sideOffset,
					align,
					alignOffset,
					arrowPadding,
					avoidCollisions,
					collisionBoundary,
					collisionPadding,
					sticky,
					hideWhenDetached,
					updatePositionStrategy,
					strategy,
					dir,
					preventScroll,
					wrapperId,
					style,
					onPlaced,
					customAnchor,
					isStatic,
					enabled: open,
					onInteractOutside,
					onCloseAutoFocus,
					onOpenAutoFocus,
					interactOutsideBehavior,
					loop,
					trapFocus,
					isValidEvent,
					onFocusOutside,
					forceMount: false,
					ref
				},

				restProps
			]));
		}

		Presence_layer($$renderer, { open, ref, presence});
	}
}

function Popper_layer_force_mount($$renderer, $$props) {
	let {
		popper,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = "close",
		loop,
		trapFocus = true,
		isValidEvent = () => false,
		customAnchor = null,
		isStatic = false,
		enabled,
		$$slots,
		$$events,
		...restProps
	} = $$props;

	Popper_layer_inner($$renderer, spread_props([
		{
			popper,
			onEscapeKeydown,
			escapeKeydownBehavior,
			preventOverflowTextSelection,
			id,
			onPointerDown,
			onPointerUp,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			preventScroll,
			wrapperId,
			style,
			onPlaced,
			customAnchor,
			isStatic,
			enabled,
			onInteractOutside,
			onCloseAutoFocus,
			onOpenAutoFocus,
			interactOutsideBehavior,
			loop,
			trapFocus,
			isValidEvent,
			onFocusOutside
		},

		restProps,
		{ forceMount: true }
	]));
}

/* popover.svelte.js generated by Svelte v5.39.6 */

const popoverAttrs = createBitsAttrs({
	component: "popover",
	parts: ["root", "trigger", "content", "close"]
});

const PopoverRootContext = new Context$2("Popover.Root");

class PopoverRootState {
	static create(opts) {
		return PopoverRootContext.set(new PopoverRootState(opts));
	}

	opts;
	contentNode = null;
	triggerNode = null;

	constructor(opts) {
		this.opts = opts;

		new OpenChangeComplete({
			ref: boxWith$1(() => this.contentNode),
			open: this.opts.open,

			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
	}

	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}

	handleClose() {
		if (!this.opts.open.current) return;

		this.opts.open.current = false;
	}
}

class PopoverTriggerState {
	static create(opts) {
		return new PopoverTriggerState(opts, PopoverRootContext.get());
	}

	opts;
	root;
	attachment;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}

	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button !== 0) return;

		this.root.toggleOpen();
	}

	onkeydown(e) {
		if (this.opts.disabled.current) return;
		if (!(e.key === ENTER || e.key === SPACE)) return;

		e.preventDefault();
		this.root.toggleOpen();
	}

	#getAriaControls() {
		if (this.root.opts.open.current && this.root.contentNode?.id) {
			return this.root.contentNode?.id;
		}

		return undefined;
	}

	#props = derived(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		"aria-controls": this.#getAriaControls(),
		[popoverAttrs.trigger]: "",
		disabled: this.opts.disabled.current,

		//
		onkeydown: this.onkeydown,

		onclick: this.onclick,
		...this.attachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}
}

class PopoverContentState {
	static create(opts) {
		return new PopoverContentState(opts, PopoverRootContext.get());
	}

	opts;
	root;
	attachment;

	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
	}

	onInteractOutside = (e) => {
		this.opts.onInteractOutside.current(e);

		if (e.defaultPrevented) return;
		if (!isElement$2(e.target)) return;

		const closestTrigger = e.target.closest(popoverAttrs.selector("trigger"));

		if (closestTrigger && closestTrigger === this.root.triggerNode) return;

		if (this.opts.customAnchor.current) {
			if (isElement$2(this.opts.customAnchor.current)) {
				if (this.opts.customAnchor.current.contains(e.target)) return;
			} else if (typeof this.opts.customAnchor.current === "string") {
				const el = document.querySelector(this.opts.customAnchor.current);

				if (el && el.contains(e.target)) return;
			}
		}

		this.root.handleClose();
	};

	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current(e);

		if (e.defaultPrevented) return;

		this.root.handleClose();
	};

	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));

	get snippetProps() {
		return this.#snippetProps();
	}

	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}

	#props = derived(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		[popoverAttrs.content]: "",
		style: { pointerEvents: "auto" },
		...this.attachment
	}));

	get props() {
		return this.#props();
	}

	set props($$value) {
		return this.#props($$value);
	}

	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown
	};
}

function Popover_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);

		let {
			child,
			children,
			ref = null,
			id = createId$1(uid),
			forceMount = false,
			onCloseAutoFocus = noop$1,
			onEscapeKeydown = noop$1,
			onInteractOutside = noop$1,
			trapFocus = true,
			preventScroll = false,
			customAnchor = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const contentState = PopoverContentState.create({
			id: boxWith$1(() => id),
			ref: boxWith$1(() => ref, (v) => ref = v),
			onInteractOutside: boxWith$1(() => onInteractOutside),
			onEscapeKeydown: boxWith$1(() => onEscapeKeydown),
			customAnchor: boxWith$1(() => customAnchor)
		});

		const mergedProps = mergeProps$1(restProps, contentState.props);

		if (forceMount) {
			$$renderer.push('<!--[-->');

			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps$1(props, { style: getFloatingContentCSSVars("popover") });

					if (child) {
						$$renderer.push('<!--[-->');

						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});

						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}

					$$renderer.push(`<!--]-->`);
				}

				Popper_layer_force_mount($$renderer, spread_props([
					mergedProps,
					contentState.popperProps,

					{
						ref: contentState.opts.ref,
						enabled: contentState.root.opts.open.current,
						id,
						trapFocus,
						preventScroll,
						loop: true,
						forceMount: true,
						customAnchor,
						onCloseAutoFocus,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else {
			$$renderer.push('<!--[!-->');

			if (!forceMount) {
				$$renderer.push('<!--[-->');

				{
					function popper($$renderer, { props, wrapperProps }) {
						const finalProps = mergeProps$1(props, { style: getFloatingContentCSSVars("popover") });

						if (child) {
							$$renderer.push('<!--[-->');

							child($$renderer, {
								props: finalProps,
								wrapperProps,
								...contentState.snippetProps
							});

							$$renderer.push(`<!---->`);
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
							children?.($$renderer);
							$$renderer.push(`<!----></div></div>`);
						}

						$$renderer.push(`<!--]-->`);
					}

					Popper_layer($$renderer, spread_props([
						mergedProps,
						contentState.popperProps,

						{
							ref: contentState.opts.ref,
							open: contentState.root.opts.open.current,
							id,
							trapFocus,
							preventScroll,
							loop: true,
							forceMount: false,
							customAnchor,
							onCloseAutoFocus,
							popper,
							$$slots: { popper: true }
						}
					]));
				}
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}

function Popover_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);

		let {
			children,
			child,
			id = createId$1(uid),
			ref = null,
			type = "button",
			disabled = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const triggerState = PopoverTriggerState.create({
			id: boxWith$1(() => id),
			ref: boxWith$1(() => ref, (v) => ref = v),
			disabled: boxWith$1(() => Boolean(disabled))
		});

		const mergedProps = mergeProps$1(restProps, triggerState.props, { type });

		Floating_layer_anchor($$renderer, {
			id,
			ref: triggerState.opts.ref,

			children: ($$renderer) => {
				if (child) {
					$$renderer.push('<!--[-->');
					child($$renderer, { props: mergedProps });
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`<button${attributes({ ...mergedProps })}>`);
					children?.($$renderer);
					$$renderer.push(`<!----></button>`);
				}

				$$renderer.push(`<!--]-->`);
			}});

		bind_props($$props, { ref });
	});
}

function Dialog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			open = false,
			onOpenChange = noop$1,
			onOpenChangeComplete = noop$1,
			children
		} = $$props;

		DialogRootState.create({
			variant: boxWith$1(() => "dialog"),

			open: boxWith$1(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),

			onOpenChangeComplete: boxWith$1(() => onOpenChangeComplete)
		});

		children?.($$renderer);
		$$renderer.push(`<!---->`);
		bind_props($$props, { open });
	});
}

function Dialog_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);

		let {
			id = createId$1(uid),
			children,
			child,
			ref = null,
			forceMount = false,
			onCloseAutoFocus = noop$1,
			onOpenAutoFocus = noop$1,
			onEscapeKeydown = noop$1,
			onInteractOutside = noop$1,
			trapFocus = true,
			preventScroll = true,
			restoreScrollDelay = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const contentState = DialogContentState.create({
			id: boxWith$1(() => id),
			ref: boxWith$1(() => ref, (v) => ref = v)
		});

		const mergedProps = mergeProps$1(restProps, contentState.props);

		{
			function presence($$renderer) {
				{
					function focusScope($$renderer, { props: focusScopeProps }) {
						Escape_layer($$renderer, spread_props([
							mergedProps,

							{
								enabled: contentState.root.opts.open.current,
								ref: contentState.opts.ref,

								onEscapeKeydown: (e) => {
									onEscapeKeydown(e);

									if (e.defaultPrevented) return;

									contentState.root.handleClose();
								},

								children: ($$renderer) => {
									Dismissible_layer($$renderer, spread_props([
										mergedProps,

										{
											ref: contentState.opts.ref,
											enabled: contentState.root.opts.open.current,

											onInteractOutside: (e) => {
												onInteractOutside(e);

												if (e.defaultPrevented) return;

												contentState.root.handleClose();
											},

											children: ($$renderer) => {
												Text_selection_layer($$renderer, spread_props([
													mergedProps,

													{
														ref: contentState.opts.ref,
														enabled: contentState.root.opts.open.current,

														children: ($$renderer) => {
															if (child) {
																$$renderer.push('<!--[-->');

																if (contentState.root.opts.open.current) {
																	$$renderer.push('<!--[-->');
																	Scroll_lock($$renderer, { preventScroll, restoreScrollDelay });
																} else {
																	$$renderer.push('<!--[!-->');
																}

																$$renderer.push(`<!--]--> `);

																child($$renderer, {
																	props: mergeProps$1(mergedProps, focusScopeProps),
																	...contentState.snippetProps
																});

																$$renderer.push(`<!---->`);
															} else {
																$$renderer.push('<!--[!-->');
																Scroll_lock($$renderer, { preventScroll });
																$$renderer.push(`<!----> <div${attributes({ ...mergeProps$1(mergedProps, focusScopeProps) })}>`);
																children?.($$renderer);
																$$renderer.push(`<!----></div>`);
															}

															$$renderer.push(`<!--]-->`);
														},

														$$slots: { default: true }
													}
												]));
											},

											$$slots: { default: true }
										}
									]));
								},

								$$slots: { default: true }
							}
						]));
					}

					Focus_scope($$renderer, {
						ref: contentState.opts.ref,
						loop: true,
						trapFocus,

						enabled: shouldEnableFocusTrap({
							forceMount,
							present: contentState.root.opts.open.current,
							open: contentState.root.opts.open.current
						}),

						onOpenAutoFocus,
						onCloseAutoFocus,
						focusScope});
				}
			}

			Presence_layer($$renderer, spread_props([
				mergedProps,

				{
					forceMount,
					open: contentState.root.opts.open.current || forceMount,
					ref: contentState.opts.ref,
					presence,
					$$slots: { presence: true }
				}
			]));
		}

		bind_props($$props, { ref });
	});
}

function Popover($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			open = false,
			onOpenChange = noop$1,
			onOpenChangeComplete = noop$1,
			children
		} = $$props;

		PopoverRootState.create({
			open: boxWith$1(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),

			onOpenChangeComplete: boxWith$1(() => onOpenChangeComplete)
		});

		Floating_layer($$renderer, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			}});

		bind_props($$props, { open });
	});
}

function Popover_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			sideOffset = 4,
			align = "center",
			portalProps,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Portal($$renderer, spread_props([
				portalProps,

				{
					children: ($$renderer) => {
						$$renderer.push(`<!---->`);

						Popover_content$1($$renderer, spread_props([
							{
								'data-slot': 'popover-content',
								sideOffset,
								align,
								class: cn$1("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-popover-content-transform-origin) outline-hidden z-50 w-72 rounded-md border p-4 shadow-md", className)
							},

							restProps,

							{
								get ref() {
									return ref;
								},

								set ref($$value) {
									ref = $$value;
									$$settled = false;
								}
							}
						]));

						$$renderer.push(`<!---->`);
					},

					$$slots: { default: true }
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}

function Popover_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Popover_trigger$1($$renderer, spread_props([
				{ 'data-slot': 'popover-trigger', class: cn$1("", className) },
				restProps,

				{
					get ref() {
						return ref;
					},

					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}

const Root = Popover;

function ChangeLocalePopover($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { currentLang, currentPath } = $$props;

		function changeUrlLanguage(lang) {
			const segments = currentPath.split("/").filter(Boolean);
			const isLocalized = Object.values(EAppLanguages).includes(segments[0]);

			if (isLocalized) {
				segments[0] = lang;
			} else {
				segments.unshift(lang);
			}

			return "/" + segments.join("/");
		}

		const translateLocaleElements = useTranslations(currentLang);

		const appLanguagesArr = [
			{
				lang: EAppLanguages.ENGLISH,
				label: translateLocaleElements("components.shared.ui.locale.en")
			},

			{
				lang: EAppLanguages.SPANISH,
				label: translateLocaleElements("components.shared.ui.locale.es")
			}
		];

		$$renderer.push(`<!---->`);

		Root($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<!---->`);

				Popover_trigger($$renderer, {
					class: 'cursor-pointer',

					children: ($$renderer) => {
						$$renderer.push(`<span>${escape_html(currentLang)}</span>`);
					},

					$$slots: { default: true }
				});

				$$renderer.push(`<!----> <!---->`);

				Popover_content($$renderer, {
					class: 'w-auto',

					children: ($$renderer) => {
						$$renderer.push(`<div class="flex flex-col gap-2"><!--[-->`);

						const each_array = ensure_array_like(appLanguagesArr);

						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let { label, lang } = each_array[$$index];

							$$renderer.push(`<a${attr('href', changeUrlLanguage(lang))}>${escape_html(label)}</a>`);
						}

						$$renderer.push(`<!--]--></div>`);
					},

					$$slots: { default: true }
				});

				$$renderer.push(`<!---->`);
			},

			$$slots: { default: true }
		});

		$$renderer.push(`<!---->`);
	});
}

const $$Astro$6 = createAstro();
const $$NavbarLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavbarLink;
  const { href, text } = Astro2.props;
  const locale = Astro2.currentLocale;
  const localizedHref = `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
  return renderTemplate`${maybeRenderHead()}<li class="transition-colors duration-200"> <a${addAttribute(localizedHref, "href")}>${text}</a> </li>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/shared/ui/navbar/NavbarLink.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/"> <span> <strong color="text-primary">${"<"}</strong>
jadiaz.<strong>inf</strong> <strong>${"/>"}</strong> </span> </a>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/shared/ui/logo/Logo.astro", void 0);

function isFunction(value) {
    return typeof value === "function";
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
    // handle primitive types
    if (value === null || value === undefined)
        return true;
    if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
        return true;
    // handle arrays (ClassArray)
    if (Array.isArray(value))
        return value.every((item) => isClassValue(item));
    // handle objects (ClassDictionary)
    if (typeof value === "object") {
        // ensure it's a plain object and not some other object type
        if (Object.getPrototypeOf(value) !== Object.prototype)
            return false;
        return true;
    }
    return false;
}

/* box.svelte.js generated by Svelte v5.39.6 */

const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");

function isBox(value) {
	return isObject(value) && BoxSymbol in value;
}

/**
 * @returns Whether the value is a WritableBox
 *
 * @see {@link https://runed.dev/docs/functions/box}
 */
function isWritableBox(value) {
	return box.isBox(value) && isWritableSymbol in value;
}

function box(initialValue) {
	let current = initialValue;

	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,

		get current() {
			return current;
		},

		set current(v) {
			current = v;
		}
	};
}

function boxWith(getter, setter) {
	const derived = getter();

	if (setter) {
		return {
			[BoxSymbol]: true,
			[isWritableSymbol]: true,

			get current() {
				return derived;
			},

			set current(v) {
				setter(v);
			}
		};
	}

	return {
		[BoxSymbol]: true,

		get current() {
			return getter();
		}
	};
}

function boxFrom(value) {
	if (box.isBox(value)) return value;
	if (isFunction(value)) return box.with(value);

	return box(value);
}

/**
 * Function that gets an object of boxes, and returns an object of reactive values
 *
 * @example
 * const count = box(0)
 * const flat = box.flatten({ count, double: box.with(() => count.current) })
 * // type of flat is { count: number, readonly double: number }
 *
 * @see {@link https://runed.dev/docs/functions/box}
 */
function boxFlatten(boxes) {
	return Object.entries(boxes).reduce(
		(acc, [key, b]) => {
			if (!box.isBox(b)) {
				return Object.assign(acc, { [key]: b });
			}

			if (box.isWritableBox(b)) {
				Object.defineProperty(acc, key, {
					get() {
						return b.current;
					},

					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					set(v) {
						b.current = v;
					}
				});
			} else {
				Object.defineProperty(acc, key, {
					get() {
						return b.current;
					}
				});
			}

			return acc;
		},
		{}
	);
}

/**
 * Function that converts a box to a readonly box.
 *
 * @example
 * const count = box(0) // WritableBox<number>
 * const countReadonly = box.readonly(count) // ReadableBox<number>
 *
 * @see {@link https://runed.dev/docs/functions/box}
 */
function toReadonlyBox(b) {
	if (!box.isWritableBox(b)) return b;

	return {
		[BoxSymbol]: true,

		get current() {
			return b.current;
		}
	};
}

box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;

/**
 * Composes event handlers into a single function that can be called with an event.
 * If the previous handler cancels the event using `event.preventDefault()`, the handlers
 * that follow will not be called.
 */
function composeHandlers(...handlers) {
    return function (e) {
        for (const handler of handlers) {
            if (!handler)
                continue;
            if (e.defaultPrevented)
                return;
            if (typeof handler === "function") {
                handler.call(this, e);
            }
            else {
                handler.current?.call(this, e);
            }
        }
    };
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
    if (NUMBER_CHAR_RE.test(char))
        return undefined;
    return char !== char.toLowerCase();
}
function splitByCase(str) {
    const parts = [];
    let buff = "";
    let previousUpper;
    let previousSplitter;
    for (const char of str) {
        // Splitter
        const isSplitter = STR_SPLITTERS.includes(char);
        if (isSplitter === true) {
            parts.push(buff);
            buff = "";
            previousUpper = undefined;
            continue;
        }
        const isUpper = isUppercase(char);
        if (previousSplitter === false) {
            // Case rising edge
            if (previousUpper === false && isUpper === true) {
                parts.push(buff);
                buff = char;
                previousUpper = isUpper;
                continue;
            }
            // Case falling edge
            if (previousUpper === true && isUpper === false && buff.length > 1) {
                const lastChar = buff.at(-1);
                parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
                buff = lastChar + char;
                previousUpper = isUpper;
                continue;
            }
        }
        // Normal char
        buff += char;
        previousUpper = isUpper;
        previousSplitter = isSplitter;
    }
    parts.push(buff);
    return parts;
}
function pascalCase(str) {
    if (!str)
        return "";
    return splitByCase(str)
        .map((p) => upperFirst(p))
        .join("");
}
function camelCase(str) {
    return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
    return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
    return str ? str[0].toLowerCase() + str.slice(1) : "";
}

function cssToStyleObj(css) {
    if (!css)
        return {};
    const styleObj = {};
    function iterator(name, value) {
        if (name.startsWith("-moz-") ||
            name.startsWith("-webkit-") ||
            name.startsWith("-ms-") ||
            name.startsWith("-o-")) {
            styleObj[pascalCase(name)] = value;
            return;
        }
        if (name.startsWith("--")) {
            styleObj[name] = value;
            return;
        }
        styleObj[camelCase(name)] = value;
    }
    parse(css, iterator);
    return styleObj;
}

/**
 * Executes an array of callback functions with the same arguments.
 * @template T The types of the arguments that the callback functions take.
 * @param callbacks array of callback functions to execute.
 * @returns A new function that executes all of the original callback functions with the same arguments.
 */
function executeCallbacks(...callbacks) {
    return (...args) => {
        for (const callback of callbacks) {
            if (typeof callback === "function") {
                callback(...args);
            }
        }
    };
}

function createParser(matcher, replacer) {
    const regex = RegExp(matcher, "g");
    return (str) => {
        // throw an error if not a string
        if (typeof str !== "string") {
            throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
        }
        // if no match between string and matcher
        if (!str.match(regex))
            return str;
        // executes the replacer function for each match
        return str.replace(regex, replacer);
    };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
    if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
        throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
    }
    return Object.keys(styleObj)
        .map((property) => `${camelToKebab(property)}: ${styleObj[property]};`)
        .join("\n");
}

function styleToString(style = {}) {
    return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);

/**
 * Modified from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts (see NOTICE.txt for source)
 */
function isEventHandler(key) {
    // we check if the 3rd character is uppercase to avoid merging our own
    // custom callbacks like `onValueChange` and strictly merge native event handlers
    return key.length > 2 && key.startsWith("on") && key[2] === key[2]?.toLowerCase();
}
/**
 * Given a list of prop objects, merges them into a single object.
 * - Automatically composes event handlers (e.g. `onclick`, `oninput`, etc.)
 * - Chains regular functions with the same name so they are called in order
 * - Merges class strings with `clsx`
 * - Merges style objects and converts them to strings
 * - Handles a bug with Svelte where setting the `hidden` attribute to `false` doesn't remove it
 * - Overrides other values with the last one
 */
function mergeProps(...args) {
    const result = { ...args[0] };
    for (let i = 1; i < args.length; i++) {
        const props = args[i];
        for (const key in props) {
            const a = result[key];
            const b = props[key];
            const aIsFunction = typeof a === "function";
            const bIsFunction = typeof b === "function";
            // compose event handlers
            if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
                // handle merging of event handlers
                const aHandler = a;
                const bHandler = b;
                result[key] = composeHandlers(aHandler, bHandler);
            }
            else if (aIsFunction && bIsFunction) {
                // chain non-event handler functions
                result[key] = executeCallbacks(a, b);
            }
            else if (key === "class") {
                // handle merging acceptable class values from clsx
                const aIsClassValue = isClassValue(a);
                const bIsClassValue = isClassValue(b);
                if (aIsClassValue && bIsClassValue) {
                    result[key] = clsx(a, b);
                }
                else if (aIsClassValue) {
                    result[key] = clsx(a);
                }
                else if (bIsClassValue) {
                    result[key] = clsx(b);
                }
            }
            else if (key === "style") {
                const aIsObject = typeof a === "object";
                const bIsObject = typeof b === "object";
                const aIsString = typeof a === "string";
                const bIsString = typeof b === "string";
                if (aIsObject && bIsObject) {
                    // both are style objects, merge them
                    result[key] = { ...a, ...b };
                }
                else if (aIsObject && bIsString) {
                    // a is style object, b is string, convert b to style object and merge
                    const parsedStyle = cssToStyleObj(b);
                    result[key] = { ...a, ...parsedStyle };
                }
                else if (aIsString && bIsObject) {
                    // a is string, b is style object, convert a to style object and merge
                    const parsedStyle = cssToStyleObj(a);
                    result[key] = { ...parsedStyle, ...b };
                }
                else if (aIsString && bIsString) {
                    // both are strings, convert both to objects and merge
                    const parsedStyleA = cssToStyleObj(a);
                    const parsedStyleB = cssToStyleObj(b);
                    result[key] = { ...parsedStyleA, ...parsedStyleB };
                }
                else if (aIsObject) {
                    result[key] = a;
                }
                else if (bIsObject) {
                    result[key] = b;
                }
                else if (aIsString) {
                    result[key] = a;
                }
                else if (bIsString) {
                    result[key] = b;
                }
            }
            else {
                // override other values
                result[key] = b !== undefined ? b : a;
            }
        }
    }
    // convert style object to string
    if (typeof result.style === "object") {
        result.style = styleToString(result.style).replaceAll("\n", " ");
    }
    // handle weird svelte bug where `hidden` is not removed when set to `false`
    if (result.hidden !== true) {
        result.hidden = undefined;
        delete result.hidden;
    }
    // handle weird svelte bug where `disabled` is not removed when set to `false`
    if (result.disabled !== true) {
        result.disabled = undefined;
        delete result.disabled;
    }
    return result;
}

const defaultWindow$2 = undefined;

/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement$2(document) {
    let activeElement = document.activeElement;
    while (activeElement?.shadowRoot) {
        const node = activeElement.shadowRoot.activeElement;
        if (node === activeElement)
            break;
        else
            activeElement = node;
    }
    return activeElement;
}

/* active-element.svelte.js generated by Svelte v5.39.6 */

let ActiveElement$2 = class ActiveElement {
	#document;
	#subscribe;

	constructor(options = {}) {
		const { window = defaultWindow$2, document = window?.document } = options;

		if (window === undefined) return;

		this.#document = document;

		this.#subscribe = createSubscriber();
	}

	get current() {
		this.#subscribe?.();

		if (!this.#document) return null;

		return getActiveElement$2(this.#document);
	}
};

/**
 * An object holding a reactive value that is equal to `document.activeElement`.
 * It automatically listens for changes, keeping the reference up to date.
 *
 * If you wish to use a custom document or shadowRoot, you should use
 * [useActiveElement](https://runed.dev/docs/utilities/active-element) instead.
 *
 * @see {@link https://runed.dev/docs/utilities/active-element}
 */
new ActiveElement$2();

/* watch.svelte.js generated by Svelte v5.39.6 */

function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}

function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}

function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}

watch.pre = watchPre;

let Context$1 = class Context {
    #name;
    #key;
    /**
     * @param name The name of the context.
     * This is used for generating the context key and error messages.
     */
    constructor(name) {
        this.#name = name;
        this.#key = Symbol(name);
    }
    /**
     * The key used to get and set the context.
     *
     * It is not recommended to use this value directly.
     * Instead, use the methods provided by this class.
     */
    get key() {
        return this.#key;
    }
    /**
     * Checks whether this has been set in the context of a parent component.
     *
     * Must be called during component initialisation.
     */
    exists() {
        return hasContext(this.#key);
    }
    /**
     * Retrieves the context that belongs to the closest parent component.
     *
     * Must be called during component initialisation.
     *
     * @throws An error if the context does not exist.
     */
    get() {
        const context = getContext(this.#key);
        if (context === undefined) {
            throw new Error(`Context "${this.#name}" not found`);
        }
        return context;
    }
    /**
     * Retrieves the context that belongs to the closest parent component,
     * or the given fallback value if the context does not exist.
     *
     * Must be called during component initialisation.
     */
    getOr(fallback) {
        const context = getContext(this.#key);
        if (context === undefined) {
            return fallback;
        }
        return context;
    }
    /**
     * Associates the given value with the current component and returns it.
     *
     * Must be called during component initialisation.
     */
    set(context) {
        return setContext(this.#key, context);
    }
};

/* use-ref-by-id.svelte.js generated by Svelte v5.39.6 */

function useRefById({ id, ref, deps = () => true, onRefChange, getRootNode }) {
	watch([() => id.current, deps], ([_id]) => {
		const rootNode = getRootNode?.() ?? document;
		const node = rootNode?.getElementById(_id);

		if (node) ref.current = node; else ref.current = null;

		onRefChange?.(ref.current);
	});
}

/**
 * A utility function that executes a callback after a specified number of milliseconds.
 */
function afterSleep(ms, cb) {
    return setTimeout(cb, ms);
}

function afterTick(fn) {
    tick().then(fn);
}

function noop() {
    // do nothing;
}

const TRANSITIONS = {
    DURATION: 0.5,
    EASE: [0.32, 0.72, 0, 1],
};
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const NESTED_DISPLACEMENT = 16;
const WINDOW_TOP_OFFSET = 26;
const DRAG_CLASS = "vaul-dragging";

const cache = new WeakMap();
function set(el, styles, ignoreCache = false) {
    if (!el || !(el instanceof HTMLElement))
        return;
    let originalStyles = {};
    Object.entries(styles).forEach(([key, value]) => {
        if (key.startsWith("--")) {
            el.style.setProperty(key, value);
            return;
        }
        originalStyles[key] = el.style[key];
        el.style[key] = value;
    });
    if (ignoreCache)
        return;
    cache.set(el, originalStyles);
}
function reset(el, prop) {
    if (!el || !(el instanceof HTMLElement))
        return;
    let originalStyles = cache.get(el);
    if (!originalStyles)
        return;
    {
        el.style[prop] = originalStyles[prop];
    }
}
const isVertical = (direction) => {
    switch (direction) {
        case "top":
        case "bottom":
            return true;
        case "left":
        case "right":
            return false;
        default:
            return direction;
    }
};
function getTranslate(element, direction) {
    if (!element) {
        return null;
    }
    const style = window.getComputedStyle(element);
    const transform = 
    // @ts-expect-error - shh
    style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
        return parseFloat(mat[1].split(", ")[isVertical(direction) ? 13 : 12]);
    }
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(", ")[isVertical(direction) ? 5 : 4]) : null;
}
function dampenValue(v) {
    return 8 * (Math.log(v + 1) - 2);
}
function assignStyle(element, style) {
    if (!element)
        return () => { };
    const prevStyle = element.style.cssText;
    Object.assign(element.style, style);
    return () => {
        element.style.cssText = prevStyle;
    };
}
/**
 * Receives functions as arguments and returns a new function that calls all.
 */
function chain$1(...fns) {
    return (...args) => {
        for (const fn of fns) {
            if (typeof fn === "function") {
                fn(...args);
            }
        }
    };
}

/* use-snap-points.svelte.js generated by Svelte v5.39.6 */

function useSnapPoints(
	{
		snapPoints,
		drawerNode,
		overlayNode,
		fadeFromIndex,
		setOpenTime,
		direction,
		container,
		snapToSequentialPoint,
		activeSnapPoint,
		open,
		isReleasing
	}
) {
	let windowDimensions = typeof window !== "undefined"
		? {
			}
		: undefined;

	const isLastSnapPoint = activeSnapPoint.current === snapPoints.current?.[snapPoints.current.length - 1] || null;
	const activeSnapPointIndex = snapPoints.current?.findIndex((snapPoint) => snapPoint === activeSnapPoint.current);
	const shouldFade = snapPoints.current && snapPoints.current.length > 0 && (fadeFromIndex.current || fadeFromIndex.current === 0) && !Number.isNaN(fadeFromIndex.current) && snapPoints.current[fadeFromIndex.current] === activeSnapPoint.current || !snapPoints.current;

	const snapPointsOffset = (() => {
		open.current;

		const containerSize = container.current
			? {
				width: container.current.getBoundingClientRect().width,
				height: container.current.getBoundingClientRect().height
			}
			: typeof window !== "undefined"
				? { width: window.innerWidth, height: window.innerHeight }
				: { width: 0, height: 0 };

		return snapPoints.current?.map((snapPoint) => {
			const isPx = typeof snapPoint === "string";
			let snapPointAsNumber = 0;

			if (isPx) {
				snapPointAsNumber = parseInt(snapPoint, 10);
			}

			if (isVertical(direction.current)) {
				const height = isPx
					? snapPointAsNumber
					: windowDimensions ? snapPoint * containerSize.height : 0;

				if (windowDimensions) {
					return direction.current === "bottom"
						? containerSize.height - height
						: -containerSize.height + height;
				}

				return height;
			}

			const width = isPx
				? snapPointAsNumber
				: windowDimensions ? snapPoint * containerSize.width : 0;

			if (windowDimensions) {
				return direction.current === "right"
					? containerSize.width - width
					: -containerSize.width + width;
			}

			return width;
		}) ?? [];
	})();

	const activeSnapPointOffset = (() => {
		if (activeSnapPointIndex !== null) {
			if (activeSnapPointIndex !== undefined) {
				return snapPointsOffset[activeSnapPointIndex];
			}
		}

		return null;
	})();

	function onSnapPointChange(activeSnapPointIndex) {
		if (snapPoints.current && activeSnapPointIndex === snapPointsOffset.length - 1) {
			setOpenTime(new Date());
		}
	}

	function snapToPoint(dimension) {
		const newSnapPointIndex = snapPointsOffset?.findIndex((snapPointDim) => snapPointDim === dimension) ?? null;

		onSnapPointChange(newSnapPointIndex);

		set(drawerNode(), {
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,

			transform: isVertical(direction.current)
				? `translate3d(0, ${dimension}px, 0)`
				: `translate3d(${dimension}px, 0, 0)`
		});

		if (snapPointsOffset && newSnapPointIndex !== snapPointsOffset.length - 1 && fadeFromIndex.current !== undefined && newSnapPointIndex !== fadeFromIndex.current && newSnapPointIndex < fadeFromIndex.current) {
			set(overlayNode(), {
				transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
				opacity: "0"
			});
		} else {
			set(overlayNode(), {
				transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
				opacity: "1"
			});
		}

		activeSnapPoint.current = snapPoints.current?.[Math.max(newSnapPointIndex, 0)];
	}

	watch([() => activeSnapPoint.current, () => open.current], () => {
		// we only want to snap to the next point if we are closing via a
		// means other than release, otherwise a race condition can occur
		// where the drawer snaps to the previous point and then closes,
		// rather than continuing to close from the current point
		const releasing = isReleasing();

		if (!activeSnapPoint.current || releasing) return;

		const newIndex = snapPoints.current?.findIndex((snapPoint) => snapPoint === activeSnapPoint.current) ?? -1;

		if (snapPointsOffset && newIndex !== -1 && typeof snapPointsOffset[newIndex] === "number") {
			if (snapPointsOffset[newIndex] === activeSnapPoint.current) return;

			snapToPoint(snapPointsOffset[newIndex]);
		}
	});

	function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
		if (fadeFromIndex.current === undefined) return;

		const dir = direction.current;

		const currentPosition = dir === "bottom" || dir === "right"
			? (activeSnapPointOffset ?? 0) - draggedDistance
			: (activeSnapPointOffset ?? 0) + draggedDistance;

		const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex.current - 1;
		const isFirst = activeSnapPointIndex === 0;
		const hasDraggedUp = draggedDistance > 0;

		if (isOverlaySnapPoint) {
			set(overlayNode(), {
				transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
			});
		}

		if (!snapToSequentialPoint.current && velocity > 2 && !hasDraggedUp) {
			if (dismissible) {
				closeDrawer();
			} else {
				snapToPoint(snapPointsOffset[0]);
			}

			return;
		}

		if (!snapToSequentialPoint.current && velocity > 2 && hasDraggedUp && snapPointsOffset && snapPoints.current) {
			snapToPoint(snapPointsOffset[snapPoints.current.length - 1]);

			return;
		}

		// Find the closest snap point to the current position
		const closestSnapPoint = snapPointsOffset?.reduce((prev, curr) => {
			if (typeof prev !== "number" || typeof curr !== "number") return prev;

			return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
		});

		const dim = isVertical(dir) ? window.innerHeight : window.innerWidth;

		if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
			const dragDirection = hasDraggedUp ? 1 : -1; // 1 = up, -1 = down

			// Don't do anything if we swipe upwards while being on the last snap point
			if (dragDirection > 0 && isLastSnapPoint && snapPoints.current) {
				snapToPoint(snapPointsOffset[snapPoints.current.length - 1]);

				return;
			}

			if (isFirst && dragDirection < 0 && dismissible) {
				closeDrawer();
			}

			if (activeSnapPointIndex === null) return;

			snapToPoint(snapPointsOffset[activeSnapPointIndex + dragDirection]);

			return;
		}

		snapToPoint(closestSnapPoint);
	}

	function onDrag({ draggedDistance }) {
		if (activeSnapPointOffset === null) return;

		const dir = direction.current;

		const newValue = isBottomOrRight(dir)
			? activeSnapPointOffset - draggedDistance
			: activeSnapPointOffset + draggedDistance;

		const lastSnapPoint = snapPointsOffset[snapPointsOffset.length - 1];

		// Don't do anything if we exceed the last(biggest) snap point
		if (isBottomOrRight(dir) && newValue < lastSnapPoint) return;

		if (!isBottomOrRight(dir) && newValue > lastSnapPoint) return;

		set(drawerNode(), {
			transform: isVertical(dir)
				? `translate3d(0, ${newValue}px, 0)`
				: `translate3d(${newValue}px, 0, 0)`
		});
	}

	function getPercentageDragged(absDraggedDistance, isDraggingDown) {
		if (!snapPoints.current || typeof activeSnapPointIndex !== "number" || !snapPointsOffset || fadeFromIndex.current === undefined) {
			return null;
		}

		// If this is true we are dragging to a snap point that is supposed to have an overlay
		const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex.current - 1;

		const isOverlaySnapPointOrHigher = activeSnapPointIndex >= fadeFromIndex.current;

		if (isOverlaySnapPointOrHigher && isDraggingDown) {
			return 0;
		}

		// Don't animate, but still use this one if we are dragging away from the overlaySnapPoint
		if (isOverlaySnapPoint && !isDraggingDown) {
			return 1;
		}

		if (!shouldFade && !isOverlaySnapPoint) {
			return null;
		}

		// Either fadeFrom index or the one before
		const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex + 1 : activeSnapPointIndex - 1;

		// Get the distance from overlaySnapPoint to the one before or vice-versa to calculate the opacity percentage accordingly
		const snapPointDistance = isOverlaySnapPoint
			? snapPointsOffset[targetSnapPointIndex] - snapPointsOffset[targetSnapPointIndex - 1]
			: snapPointsOffset[targetSnapPointIndex + 1] - snapPointsOffset[targetSnapPointIndex];

		const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);

		if (isOverlaySnapPoint) {
			return 1 - percentageDragged;
		} else {
			return percentageDragged;
		}
	}

	return {
		get isLastSnapPoint() {
			return isLastSnapPoint;
		},

		get shouldFade() {
			return shouldFade;
		},

		get activeSnapPointIndex() {
			return activeSnapPointIndex;
		},

		get snapPointsOffset() {
			return snapshot(snapPointsOffset);
		},

		getPercentageDragged,
		onRelease,
		onDrag
	};
}

function isBottomOrRight(direction) {
	if (direction === "bottom" || direction === "right") return true;

	return false;
}

const isBrowser$2 = typeof document !== "undefined";
function isMobileFirefox() {
    const userAgent = navigator.userAgent;
    return (typeof window !== "undefined" &&
        ((/Firefox/.test(userAgent) && /Mobile/.test(userAgent)) || // Android Firefox
            /FxiOS/.test(userAgent)) // iOS Firefox
    );
}
function isMac() {
    return testPlatform(/^Mac/);
}
function isIPhone() {
    return testPlatform(/^iPhone/);
}
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function isIPad() {
    return (testPlatform(/^iPad/) ||
        // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
        (isMac() && navigator.maxTouchPoints > 1));
}
function isIOS() {
    return isIPhone() || isIPad();
}
function testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null
        ? re.test(window.navigator.platform)
        : undefined;
}

/* use-prevent-scroll.svelte.js generated by Svelte v5.39.6 */

const KEYBOARD_BUFFER = 24;

function chain(...callbacks) {
	return (...args) => {
		for (let callback of callbacks) {
			if (typeof callback === "function") {
				callback(...args);
			}
		}
	};
}

const visualViewport = isBrowser$2 && window.visualViewport;

function isScrollable(node) {
	let style = window.getComputedStyle(node);

	return (/(auto|scroll)/).test(style.overflow + style.overflowX + style.overflowY);
}

function getScrollParent(node) {
	if (isScrollable(node)) {
		node = node.parentElement;
	}

	while (node && !isScrollable(node)) {
		node = node.parentElement;
	}

	return node || document.scrollingElement || document.documentElement;
}

// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);

// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;

let restore;

/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
function usePreventScroll(opts) {
	watch(opts.isDisabled, () => {
		if (opts.isDisabled()) {
			return;
		}

		preventScrollCount++;

		if (preventScrollCount === 1) {
			if (isIOS()) {
				restore = preventScrollMobileSafari();
			}
		}

		return () => {
			preventScrollCount--;

			if (preventScrollCount === 0) {
				restore?.();
			}
		};
	});
}

// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function preventScrollMobileSafari() {
	let scrollable;
	let lastY = 0;

	const onTouchStart = (e) => {
		// Store the nearest scrollable parent element from the element that the user touched.
		scrollable = getScrollParent(e.target);

		if (scrollable === document.documentElement && scrollable === document.body) {
			return;
		}

		lastY = e.changedTouches[0].pageY;
	};

	let onTouchMove = (e) => {
		// Prevent scrolling the window.
		if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
			e.preventDefault();

			return;
		}

		// Prevent scrolling up when at the top and scrolling down when at the bottom
		// of a nested scrollable area, otherwise mobile Safari will start scrolling
		// the window instead. Unfortunately, this disables bounce scrolling when at
		// the top but it's the best we can do.
		let y = e.changedTouches[0].pageY;

		let scrollTop = scrollable.scrollTop;
		let bottom = scrollable.scrollHeight - scrollable.clientHeight;

		if (bottom === 0) {
			return;
		}

		if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
			e.preventDefault();
		}

		lastY = y;
	};

	let onTouchEnd = (e) => {
		let target = e.target;

		// Apply this change if we're not already focused on the target element
		if (isInput(target) && target !== document.activeElement) {
			e.preventDefault();

			// Apply a transform to trick Safari into thinking the input is at the top of the page
			// so it doesn't try to scroll it into view. When tapping on an input, this needs to
			// be done before the "focus" event, so we have to focus the element ourselves.
			target.style.transform = "translateY(-2000px)";

			target.focus();

			requestAnimationFrame(() => {
				target.style.transform = "";
			});
		}
	};

	const onFocus = (e) => {
		let target = e.target;

		if (isInput(target)) {
			// Transform also needs to be applied in the focus event in cases where focus moves
			// other than tapping on an input directly, e.g. the next/previous buttons in the
			// software keyboard. In these cases, it seems applying the transform in the focus event
			// is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
			target.style.transform = "translateY(-2000px)";

			requestAnimationFrame(() => {
				target.style.transform = "";

				// This will have prevented the browser from scrolling the focused element into view,
				// so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
				if (visualViewport) {
					if (visualViewport.height < window.innerHeight) {
						// If the keyboard is already visible, do this after one additional frame
						// to wait for the transform to be removed.
						requestAnimationFrame(() => {
							scrollIntoView(target);
						});
					} else {
						// Otherwise, wait for the visual viewport to resize before scrolling so we can
						// measure the correct position to scroll to.
						visualViewport.addEventListener("resize", () => scrollIntoView(target), { once: true });
					}
				}
			});
		}
	};

	let onWindowScroll = () => {
		// Last resort. If the window scrolled, scroll it back to the top.
		// It should always be at the top because the body will have a negative margin (see below).
		window.scrollTo(0, 0);
	};

	// Record the original scroll position so we can restore it.
	// Then apply a negative margin to the body to offset it by the scroll position. This will
	// enable us to scroll the window to the top, which is required for the rest of this to work.
	let scrollX = window.pageXOffset;

	let scrollY = window.pageYOffset;
	let restoreStyles = chain(setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));

	// setStyle(document.documentElement, 'overflow', 'hidden'),
	// setStyle(document.body, 'marginTop', `-${scrollY}px`),
	// Scroll to the top. The negative margin on the body will make this appear the same.
	window.scrollTo(0, 0);

	let removeEvents = chain(on(document, "touchstart", onTouchStart, { passive: false, capture: true }), on(document, "touchmove", onTouchMove, { passive: false, capture: true }), on(document, "touchend", onTouchEnd, { passive: false, capture: true }), on(document, "focus", onFocus, { capture: true }), on(window, "scroll", onWindowScroll));

	return () => {
		// Restore styles and scroll the page back to where it was.
		restoreStyles();

		removeEvents();
		window.scrollTo(scrollX, scrollY);
	};
}

// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function setStyle(element, style, value) {
	// https://github.com/microsoft/TypeScript/issues/17827#issuecomment-391663310
	let cur = element.style[style];

	// @ts-expect-error - TS doesn't like dynamic keys on CSSStyleDeclaration
	element.style[style] = value;

	return () => {
		// @ts-expect-error - TS doesn't like dynamic keys on CSSStyleDeclaration
		element.style[style] = cur;
	};
}

function scrollIntoView(target) {
	let root = document.scrollingElement || document.documentElement;

	while (target && target !== root) {
		// Find the parent scrollable element and adjust the scroll position if the target is not already in view.
		let scrollable = getScrollParent(target);

		if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
			let scrollableTop = scrollable.getBoundingClientRect().top;
			let targetTop = target.getBoundingClientRect().top;
			let targetBottom = target.getBoundingClientRect().bottom;

			// Buffer is needed for some edge cases
			const keyboardHeight = scrollable.getBoundingClientRect().bottom + KEYBOARD_BUFFER;

			if (targetBottom > keyboardHeight) {
				scrollable.scrollTop += targetTop - scrollableTop;
			}
		}

		// @ts-expect-error - sh
		target = scrollable.parentElement;
	}
}

function isInput(target) {
	return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}

/* use-position-fixed.svelte.js generated by Svelte v5.39.6 */

let previousBodyPosition = null;

function usePositionFixed(
	{
		open,
		modal,
		nested,
		hasBeenOpened,
		preventScrollRestoration,
		noBodyStyles
	}
) {
	let activeUrl = typeof window !== "undefined" ? window.location.href : "";
	let scrollPos = 0;

	function setPositionFixed() {
		// All browsers on iOS will return true here.
		if (!isSafari()) return;

		// If previousBodyPosition is already set, don't set it again.
		if (previousBodyPosition === null && open.current && !noBodyStyles.current) {
			previousBodyPosition = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};

			// Update the dom inside an animation frame
			const { scrollX, innerHeight } = window;

			document.body.style.setProperty("position", "fixed", "important");

			Object.assign(document.body.style, {
				top: `${-scrollPos}px`,
				left: `${-scrollX}px`,
				right: "0px",
				height: "auto"
			});

			window.setTimeout(
				() => window.requestAnimationFrame(() => {
					// Attempt to check if the bottom bar appeared due to the position change
					const bottomBarHeight = innerHeight - window.innerHeight;

					if (bottomBarHeight && scrollPos >= innerHeight) {
						// Move the content further up so that the bottom bar doesn't hide it
						document.body.style.top = `${-(scrollPos + bottomBarHeight)}px`;
					}
				}),
				300
			);
		}
	}

	function restorePositionSetting() {
		// All browsers on iOS will return true here.
		if (!isSafari()) return;

		if (previousBodyPosition !== null && !noBodyStyles.current) {
			// Convert the position from "px" to Int
			const y = -parseInt(document.body.style.top, 10);

			const x = -parseInt(document.body.style.left, 10);

			// Restore styles
			Object.assign(document.body.style, previousBodyPosition);

			window.requestAnimationFrame(() => {
				if (preventScrollRestoration.current && activeUrl !== window.location.href) {
					activeUrl = window.location.href;

					return;
				}

				window.scrollTo(x, y);
			});

			previousBodyPosition = null;
		}
	}

	watch([() => modal.current, () => activeUrl], () => {
		if (!modal.current) return;

		return () => {
			if (typeof document === "undefined") return;

			// Another drawer is opened, safe to ignore the execution
			const hasDrawerOpened = !!document.querySelector("[data-vaul-drawer]");

			if (hasDrawerOpened) return;

			restorePositionSetting();
		};
	});

	watch(
		[
			() => open.current,
			() => hasBeenOpened(),
			() => activeUrl,
			() => modal.current,
			() => nested.current
		],
		() => {
			if (nested.current || !hasBeenOpened()) return;

			// This is needed to force Safari toolbar to show **before** the drawer starts animating to prevent a gnarly shift from happening
			if (open.current) {
				// avoid for standalone mode (PWA)
				const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

				!isStandalone && setPositionFixed();

				if (!modal.current) {
					window.setTimeout(
						() => {
							restorePositionSetting();
						},
						500
					);
				}
			} else {
				restorePositionSetting();
			}
		}
	);

	return { restorePositionSetting };
}

const DrawerContext = new Context$1("Drawer.Root");

/* use-drawer-root.svelte.js generated by Svelte v5.39.6 */

function useDrawerRoot(opts) {
	let hasBeenOpened = false;
	let isDragging = false;
	let justReleased = false;
	let overlayNode = null;
	let drawerNode = null;
	let openTime = null;
	let dragStartTime = null;
	let dragEndTime = null;
	let lastTimeDragPrevented = null;
	let isAllowedToDrag = false;
	let nestedOpenChangeTimer = null;
	let pointerStart = 0;
	let keyboardIsOpen = box(false);
	let shouldAnimate = !opts.open.current;
	let previousDiffFromInitial = 0;
	let drawerHeight = 0;
	let drawerWidth = 0;
	let initialDrawerHeight = 0;
	let isReleasing = false;

	const snapPointsState = useSnapPoints({
		snapPoints: opts.snapPoints,
		drawerNode: () => drawerNode,
		activeSnapPoint: opts.activeSnapPoint,
		container: opts.container,
		direction: opts.direction,
		fadeFromIndex: opts.fadeFromIndex,
		overlayNode: () => overlayNode,

		setOpenTime: (time) => {
			openTime = time;
		},

		snapToSequentialPoint: opts.snapToSequentialPoint,
		open: opts.open,
		isReleasing: () => isReleasing
	});

	usePreventScroll({
		isDisabled: () => !opts.open.current || isDragging || !opts.modal.current || justReleased || !hasBeenOpened || !opts.repositionInputs.current || !opts.disablePreventScroll.current
	});

	const { restorePositionSetting } = usePositionFixed({ ...opts, hasBeenOpened: () => hasBeenOpened });

	function getScale() {
		return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
	}

	function onPress(event) {
		if (!opts.dismissible.current && !opts.snapPoints.current) return;
		if (drawerNode && !drawerNode.contains(event.target)) return;

		drawerHeight = drawerNode?.getBoundingClientRect().height || 0;
		drawerWidth = drawerNode?.getBoundingClientRect().width || 0;
		isDragging = true;
		dragStartTime = new Date();

		// iOS doesn't trigger mouseUp after scrolling so we need to listen to touched in order to disallow dragging
		if (isIOS()) {
			on(window, "touchend", () => isAllowedToDrag = false, { once: true });
		}

		// Ensure we maintain correct pointer capture even when going outside of the drawer
		event.target.setPointerCapture(event.pointerId);

		pointerStart = isVertical(opts.direction.current) ? event.pageY : event.pageX;
	}

	function shouldDrag(el, isDraggingInDirection) {
		let element = el;
		const highlightedText = window.getSelection()?.toString();

		const swipeAmount = drawerNode
			? getTranslate(drawerNode, opts.direction.current)
			: null;

		const date = new Date();

		// Fixes https://github.com/emilkowalski/vaul/issues/483
		if (element.tagName === "SELECT") return false;

		if (element.hasAttribute("data-vaul-no-drag") || element.closest("[data-vaul-no-drag]")) {
			return false;
		}

		if (opts.direction.current === "right" || opts.direction.current === "left") {
			return true;
		}

		// Allow scrolling when animating
		if (openTime && date.getTime() - openTime.getTime() < 500) {
			return false;
		}

		if (swipeAmount !== null) {
			if (opts.direction.current === "bottom" ? swipeAmount > 0 : swipeAmount < 0) {
				return true;
			}
		}

		// Don't drag if there's highlighted text
		if (highlightedText && highlightedText.length > 0) {
			return false;
		}

		// Disallow dragging if drawer was scrolled within `scrollLockTimeout`
		if (lastTimeDragPrevented && date.getTime() - lastTimeDragPrevented.getTime() < opts.scrollLockTimeout.current && swipeAmount === 0) {
			lastTimeDragPrevented = date;

			return false;
		}

		if (isDraggingInDirection) {
			lastTimeDragPrevented = date;

			// We are dragging down so we should allow scrolling
			return false;
		}

		// Keep climbing up the DOM tree as long as there's a parent
		while (element) {
			// Check if the element is scrollable
			if (element.scrollHeight > element.clientHeight) {
				if (element.scrollTop !== 0) {
					lastTimeDragPrevented = new Date();

					// The element is scrollable and not scrolled to the top, so don't drag
					return false;
				}

				if (element.getAttribute("role") === "dialog") {
					return true;
				}
			}

			// Move up to the parent element
			element = element.parentNode;
		}

		// No scrollable parents not scrolled to the top found, so drag
		return true;
	}

	function onDrag(event) {
		if (!drawerNode || !isDragging) return;

		// We need to know how much of the drawer has been dragged in percentages so that we can transform background accordingly
		const directionMultiplier = opts.direction.current === "bottom" || opts.direction.current === "right" ? 1 : -1;

		const draggedDistance = (pointerStart - (isVertical(opts.direction.current) ? event.pageY : event.pageX)) * directionMultiplier;
		const isDraggingInDirection = draggedDistance > 0;

		// Pre condition for disallowing dragging in the close direction.
		const noCloseSnapPointsPreCondition = opts.snapPoints.current && !opts.dismissible.current && !isDraggingInDirection;

		// Disallow dragging down to close when first snap point is the active one and dismissible prop is set to false.
		if (noCloseSnapPointsPreCondition && snapPointsState.activeSnapPointIndex === 0) return;

		// We need to capture last time when drag with scroll was triggered and have a timeout between
		const absDraggedDistance = Math.abs(draggedDistance);

		const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
		const drawerDimension = opts.direction.current === "bottom" || opts.direction.current === "top" ? drawerHeight : drawerWidth;

		// Calculate the percentage dragged, where 1 is the closed position
		let percentageDragged = absDraggedDistance / drawerDimension;

		const snapPointPercentageDragged = snapPointsState.getPercentageDragged(absDraggedDistance, isDraggingInDirection);

		if (snapPointPercentageDragged !== null) {
			percentageDragged = snapPointPercentageDragged;
		}

		// Disallow close dragging beyond the smallest snap point.
		if (noCloseSnapPointsPreCondition && percentageDragged >= 1) {
			return;
		}

		if (!isAllowedToDrag && !shouldDrag(event.target, isDraggingInDirection)) return;

		drawerNode.classList.add(DRAG_CLASS);

		// If shouldDrag gave true once after pressing down on the drawer, we set isAllowedToDrag to true and it will remain true until we let go, there's no reason to disable dragging mid way, ever, and that's the solution to it
		isAllowedToDrag = true;

		set(drawerNode, { transition: "none" });
		set(overlayNode, { transition: "none" });

		if (opts.snapPoints.current) {
			snapPointsState.onDrag({ draggedDistance });
		}

		// Run this only if snapPoints are not defined or if we are at the last snap point (highest one)
		if (isDraggingInDirection && !opts.snapPoints.current) {
			const dampenedDraggedDistance = dampenValue(draggedDistance);
			const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;

			set(drawerNode, {
				transform: isVertical(opts.direction.current)
					? `translate3d(0, ${translateValue}px, 0)`
					: `translate3d(${translateValue}px, 0, 0)`
			});

			return;
		}

		const opacityValue = 1 - percentageDragged;

		if (snapPointsState.shouldFade || opts.fadeFromIndex.current && snapPointsState.activeSnapPointIndex === opts.fadeFromIndex.current - 1) {
			opts.onDrag.current?.(event, percentageDragged);
			set(overlayNode, { opacity: `${opacityValue}`, transition: "none" }, true);
		}

		if (wrapper && overlayNode && opts.shouldScaleBackground.current) {
			// Calculate percentageDragged as a fraction (0 to 1)
			const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);

			const borderRadiusValue = 8 - percentageDragged * 8;
			const translateValue = Math.max(0, 14 - percentageDragged * 14);

			set(
				wrapper,
				{
					borderRadius: `${borderRadiusValue}px`,

					transform: isVertical(opts.direction.current)
						? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)`
						: `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,

					transition: "none"
				},
				true
			);
		}

		if (!opts.snapPoints.current) {
			const translateValue = absDraggedDistance * directionMultiplier;

			set(drawerNode, {
				transform: isVertical(opts.direction.current)
					? `translate3d(0, ${translateValue}px, 0)`
					: `translate3d(${translateValue}px, 0, 0)`
			});
		}
	}

	function onDialogOpenChange(o) {
		if (!opts.dismissible.current && !o) return;

		if (o) {
			hasBeenOpened = true;
		} else {
			closeDrawer(true);
		}

		opts.open.current = o;
	}

	function onVisualViewportChange() {
		if (!drawerNode || !opts.repositionInputs.current) return;

		const focusedElement = document.activeElement;

		if (isInput(focusedElement) || keyboardIsOpen.current) {
			const visualViewportHeight = window.visualViewport?.height || 0;
			const totalHeight = window.innerHeight;

			// This is the height of the keyboard
			let diffFromInitial = totalHeight - visualViewportHeight;

			const drawerHeight = drawerNode.getBoundingClientRect().height || 0;

			// Adjust drawer height only if it's tall enough
			const isTallEnough = drawerHeight > totalHeight * 0.8;

			if (!initialDrawerHeight) {
				initialDrawerHeight = drawerHeight;
			}

			const offsetFromTop = drawerNode.getBoundingClientRect().top;

			// visualViewport height may change due to some subtle changes to the keyboard. Checking if the height changed by 60 or more will make sure that they keyboard really changed its open state.
			if (Math.abs(previousDiffFromInitial - diffFromInitial) > 60) {
				keyboardIsOpen.current = !keyboardIsOpen.current;
			}

			if (opts.snapPoints.current && opts.snapPoints.current.length > 0 && snapPointsState.snapPointsOffset && snapPointsState.activeSnapPointIndex) {
				const activeSnapPointHeight = snapPointsState.snapPointsOffset[snapPointsState.activeSnapPointIndex] || 0;

				diffFromInitial += activeSnapPointHeight;
			}

			previousDiffFromInitial = diffFromInitial;

			// We don't have to change the height if the input is in view, when we are here we are in the opened keyboard state so we can correctly check if the input is in view
			if (drawerHeight > visualViewportHeight || keyboardIsOpen.current) {
				const height = drawerNode.getBoundingClientRect().height;
				let newDrawerHeight = height;

				if (height > visualViewportHeight) {
					newDrawerHeight = visualViewportHeight - (isTallEnough ? offsetFromTop : WINDOW_TOP_OFFSET);
				}

				// When fixed, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
				if (opts.fixed.current) {
					drawerNode.style.height = `${height - Math.max(diffFromInitial, 0)}px`;
				} else {
					drawerNode.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
				}
			} else if (!isMobileFirefox()) {
				drawerNode.style.height = `${initialDrawerHeight}px`;
			}

			if (opts.snapPoints.current && opts.snapPoints.current.length > 0 && !keyboardIsOpen.current) {
				drawerNode.style.bottom = `0px`;
			} else {
				// Negative bottom value would never make sense
				drawerNode.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
			}
		}
	}

	watch(
		[
			() => snapPointsState.activeSnapPointIndex,
			() => opts.snapPoints.current,
			() => snapPointsState.snapPointsOffset,
			() => drawerNode
		],
		() => {
			if (!window.visualViewport) return;

			return on(window.visualViewport, "resize", onVisualViewportChange);
		}
	);

	function cancelDrag() {
		if (!isDragging || !drawerNode) return;

		drawerNode.classList.remove(DRAG_CLASS);
		isAllowedToDrag = false;
		isDragging = false;
		dragEndTime = new Date();
	}

	function closeDrawer(fromWithin) {
		cancelDrag();
		opts.onClose?.current();

		if (!fromWithin) {
			handleOpenChange(false);
			opts.open.current = false;
		}

		window.setTimeout(
			() => {
				if (opts.snapPoints.current && opts.snapPoints.current.length > 0) {
					opts.activeSnapPoint.current = opts.snapPoints.current[0];
				}
			},
			TRANSITIONS.DURATION * 1000
		);
	}

	function resetDrawer() {
		if (!drawerNode) return;

		const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
		const currentSwipeAmount = getTranslate(drawerNode, opts.direction.current);

		set(drawerNode, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
		});

		set(overlayNode, {
			transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			opacity: "1"
		});

		// Don't reset background if swiped upwards
		if (opts.shouldScaleBackground.current && currentSwipeAmount && currentSwipeAmount > 0 && opts.open.current) {
			set(
				wrapper,
				{
					borderRadius: `${BORDER_RADIUS}px`,
					overflow: "hidden",

					...isVertical(opts.direction.current)
						? {
							transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
							transformOrigin: "top"
						}
						: {
							transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
							transformOrigin: "left"
						},

					transitionProperty: "transform, border-radius",
					transitionDuration: `${TRANSITIONS.DURATION}s`,
					transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
				},
				true
			);
		}
	}

	function onRelease(event) {
		// We keep track of whether we are releasing or not
		// because we need to differentiate release from outside click/escape keydown
		isReleasing = true;

		handleRelease(event);

		afterTick(() => {
			isReleasing = false;
		});
	}

	function handleRelease(event) {
		if (!isDragging || !drawerNode) return;

		drawerNode.classList.remove(DRAG_CLASS);
		isAllowedToDrag = false;
		isDragging = false;
		dragEndTime = new Date();

		const swipeAmount = getTranslate(drawerNode, opts.direction.current);

		if (!event || event.target && !shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount)) {
			return;
		}

		if (dragStartTime === null) return;

		const timeTaken = dragEndTime.getTime() - dragStartTime.getTime();
		const distMoved = pointerStart - (isVertical(opts.direction.current) ? event.pageY : event.pageX);
		const velocity = Math.abs(distMoved) / timeTaken;

		if (velocity > 0.05) {
			// `justReleased` is needed to prevent the drawer from focusing on an input when the drag ends, as it's not the intent most of the time.
			justReleased = true;

			setTimeout(
				() => {
					justReleased = false;
				},
				200
			);
		}

		if (opts.snapPoints.current) {
			const directionMultiplier = opts.direction.current === "bottom" || opts.direction.current === "right" ? 1 : -1;

			snapPointsState.onRelease({
				draggedDistance: distMoved * directionMultiplier,
				closeDrawer,
				velocity,
				dismissible: opts.dismissible.current
			});

			opts.onRelease.current?.(event, true);

			return;
		}

		// Moved upwards, don't do anything
		if (opts.direction.current === "bottom" || opts.direction.current === "right" ? distMoved > 0 : distMoved < 0) {
			resetDrawer();
			opts.onRelease.current?.(event, true);

			return;
		}

		if (velocity > VELOCITY_THRESHOLD) {
			closeDrawer();
			opts.onRelease.current?.(event, false);

			return;
		}

		const visibleDrawerHeight = Math.min(drawerNode.getBoundingClientRect().height ?? 0, window.innerHeight);
		const visibleDrawerWidth = Math.min(drawerNode.getBoundingClientRect().width ?? 0, window.innerWidth);
		const isHorizontalSwipe = opts.direction.current === "left" || opts.direction.current === "right";

		if (Math.abs(swipeAmount) >= (isHorizontalSwipe ? visibleDrawerWidth : visibleDrawerHeight) * opts.closeThreshold.current) {
			closeDrawer();
			opts.onRelease.current?.(event, false);

			return;
		}

		opts.onRelease.current?.(event, true);
		resetDrawer();
	}

	watch(() => opts.open.current, () => {
		// Trigger enter animation without using CSS animation
		if (opts.open.current) {
			set(document.documentElement, { scrollBehavior: "auto" });
			openTime = new Date();
		}

		return () => {
			reset(document.documentElement, "scrollBehavior");
		};
	});

	function onNestedOpenChange(o) {
		const scale = o
			? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth
			: 1;

		const initialTranslate = o ? -NESTED_DISPLACEMENT : 0;

		if (nestedOpenChangeTimer) {
			window.clearTimeout(nestedOpenChangeTimer);
		}

		set(drawerNode, {
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,

			transform: isVertical(opts.direction.current)
				? `scale(${scale}) translate3d(0, ${initialTranslate}px, 0)`
				: `scale(${scale}) translate3d(${initialTranslate}px, 0, 0)`
		});

		if (!o && drawerNode) {
			nestedOpenChangeTimer = window.setTimeout(
				() => {
					const translateValue = getTranslate(drawerNode, opts.direction.current);

					set(drawerNode, {
						transition: "none",

						transform: isVertical(opts.direction.current)
							? `translate3d(0, ${translateValue}px, 0)`
							: `translate3d(${translateValue}px, 0, 0)`
					});
				},
				500
			);
		}
	}

	function onNestedDrag(_event, percentageDragged) {
		if (percentageDragged < 0) return;

		const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
		const newScale = initialScale + percentageDragged * (1 - initialScale);
		const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;

		set(drawerNode, {
			transform: isVertical(opts.direction.current)
				? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)`
				: `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,

			transition: "none"
		});
	}

	function onNestedRelease(_event, o) {
		const dim = isVertical(opts.direction.current) ? window.innerHeight : window.innerWidth;
		const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
		const translate = o ? -NESTED_DISPLACEMENT : 0;

		if (o) {
			set(drawerNode, {
				transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,

				transform: isVertical(opts.direction.current)
					? `scale(${scale}) translate3d(0, ${translate}px, 0)`
					: `scale(${scale}) translate3d(${translate}px, 0, 0)`
			});
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let bodyStyles;

	function handleOpenChange(o) {
		opts.onOpenChange.current?.(o);

		if (o && !opts.nested.current) {
			bodyStyles = document.body.style.cssText;
		} else if (!o && !opts.nested.current) {
			afterSleep(TRANSITIONS.DURATION * 1000, () => {
				document.body.style.cssText = bodyStyles;
			});
		}

		if (!o && !opts.nested.current) {
			restorePositionSetting();
		}

		setTimeout(
			() => {
				opts.onAnimationEnd.current?.(o);
			},
			TRANSITIONS.DURATION * 1000
		);

		if (o && !opts.modal.current) {
			if (typeof window !== "undefined") {
				window.requestAnimationFrame(() => {
					document.body.style.pointerEvents = "auto";
				});
			}
		}

		if (!o) {
			// This will be removed when the exit animation ends (`500ms`)
			document.body.style.pointerEvents = "auto";
		}
	}

	watch(() => opts.modal.current, () => {
		if (!opts.modal.current) {
			window.requestAnimationFrame(() => {
				document.body.style.pointerEvents = "auto";
			});
		}
	});

	function setOverlayNode(node) {
		overlayNode = node;
	}

	function setDrawerNode(node) {
		drawerNode = node;
	}

	return DrawerContext.set({
		...opts,
		keyboardIsOpen,
		closeDrawer,
		setDrawerNode,
		setOverlayNode,
		onDrag,
		onNestedDrag,
		onNestedOpenChange,
		onNestedRelease,
		onRelease,
		onPress,
		onDialogOpenChange,

		get shouldAnimate() {
			return shouldAnimate;
		},

		get isDragging() {
			return isDragging;
		},

		get overlayNode() {
			return overlayNode;
		},

		get drawerNode() {
			return drawerNode;
		},

		get snapPointsOffset() {
			return snapPointsState.snapPointsOffset;
		},

		get shouldFade() {
			return snapPointsState.shouldFade;
		},

		restorePositionSetting,
		handleOpenChange
	});
}

function Drawer$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			open = false,
			onOpenChange = noop,
			onDrag = noop,
			onRelease = noop,
			snapPoints,
			shouldScaleBackground = false,
			setBackgroundColorOnScale = true,
			closeThreshold = CLOSE_THRESHOLD,
			scrollLockTimeout = SCROLL_LOCK_TIMEOUT,
			dismissible = true,
			handleOnly = false,
			fadeFromIndex = snapPoints && snapPoints.length - 1,
			activeSnapPoint = null,
			onActiveSnapPointChange = noop,
			fixed = false,
			modal = true,
			onClose = noop,
			nested = false,
			noBodyStyles = false,
			direction = "bottom",
			snapToSequentialPoint = false,
			preventScrollRestoration = false,
			repositionInputs = true,
			onAnimationEnd = noop,
			container = null,
			autoFocus = false,
			disablePreventScroll = true,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const rootState = useDrawerRoot({
			open: box.with(() => open, (o) => {
				open = o;
				rootState.handleOpenChange(o);
			}),

			closeThreshold: box.with(() => closeThreshold),
			scrollLockTimeout: box.with(() => scrollLockTimeout),
			snapPoints: box.with(() => snapPoints),
			fadeFromIndex: box.with(() => fadeFromIndex),
			nested: box.with(() => nested),
			shouldScaleBackground: box.with(() => shouldScaleBackground),

			activeSnapPoint: box.with(() => activeSnapPoint, (v) => {
				activeSnapPoint = v;
				onActiveSnapPointChange(v);
			}),

			onRelease: box.with(() => onRelease),
			onDrag: box.with(() => onDrag),
			onClose: box.with(() => onClose),
			dismissible: box.with(() => dismissible),
			direction: box.with(() => direction),
			fixed: box.with(() => fixed),
			modal: box.with(() => modal),
			handleOnly: box.with(() => handleOnly),
			noBodyStyles: box.with(() => noBodyStyles),
			preventScrollRestoration: box.with(() => preventScrollRestoration),
			setBackgroundColorOnScale: box.with(() => setBackgroundColorOnScale),
			repositionInputs: box.with(() => repositionInputs),
			autoFocus: box.with(() => autoFocus),
			snapToSequentialPoint: box.with(() => snapToSequentialPoint),
			container: box.with(() => container),
			disablePreventScroll: box.with(() => disablePreventScroll),
			onOpenChange: box.with(() => onOpenChange),
			onAnimationEnd: box.with(() => onAnimationEnd)
		});

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			var bind_get = () => rootState.open.current;

			var bind_set = (o) => {
				rootState.onDialogOpenChange(o);
			};

			$$renderer.push(`<!---->`);

			Dialog($$renderer, spread_props([
				{
					get open() {
						return bind_get();
					},

					set open($$value) {
						bind_set($$value);
					}
				},

				restProps
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open, activeSnapPoint });
	});
}

globalThis.vaulIdCounter ??= { current: 0 };
/**
 * Generates a unique ID based on a global counter.
 */
function useId(prefix = "vaul-svelte") {
    globalThis.vaulIdCounter.current++;
    return `${prefix}-${globalThis.vaulIdCounter.current}`;
}

/* use-scale-background.svelte.js generated by Svelte v5.39.6 */

function useScaleBackground() {
	const ctx = DrawerContext.get();
	let timeoutId = null;
	const initialBackgroundColor = typeof document !== "undefined" ? document.body.style.backgroundColor : "";

	function getScale() {
		return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
	}

	watch(
		[
			() => ctx.open.current,
			() => ctx.shouldScaleBackground.current,
			() => ctx.setBackgroundColorOnScale.current
		],
		() => {
			if (ctx.open.current && ctx.shouldScaleBackground.current) {
				if (timeoutId) clearTimeout(timeoutId);

				const wrapper = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[data-vaul-drawer-wrapper]");

				if (!wrapper) return;

				chain$1(
					ctx.setBackgroundColorOnScale.current && !ctx.noBodyStyles.current
						? assignStyle(document.body, { background: "black" })
						: noop,
					assignStyle(wrapper, {
						transformOrigin: isVertical(ctx.direction.current) ? "top" : "left",
						transitionProperty: "transform, border-radius",
						transitionDuration: `${TRANSITIONS.DURATION}s`,
						transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
					})
				);

				const wrapperStylesCleanup = assignStyle(wrapper, {
					borderRadius: `${BORDER_RADIUS}px`,
					overflow: "hidden",

					...isVertical(ctx.direction.current)
						? {
							transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
						}
						: {
							transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
						}
				});

				return () => {
					wrapperStylesCleanup();

					timeoutId = window.setTimeout(
						() => {
							if (initialBackgroundColor) {
								document.body.style.background = initialBackgroundColor;
							} else {
								document.body.style.removeProperty("background");
							}
						},
						TRANSITIONS.DURATION * 1000
					);
				};
			}
		}
	);
}

/* use-drawer-content.svelte.js generated by Svelte v5.39.6 */

function useDrawerContent(opts) {
	const ctx = DrawerContext.get();
	let mounted = false;

	useRefById({
		id: opts.id,
		ref: opts.ref,
		deps: () => [mounted, ctx.open.current],

		onRefChange: (node) => {
			if (!mounted) {
				ctx.setDrawerNode(null);
			} else {
				ctx.setDrawerNode(node);
			}
		}
	});

	let delayedSnapPoints = false;
	let pointerStart = null;
	let lastKnownPointerEvent = null;
	let wasBeyondThePoint = false;
	const hasSnapPoints = ctx.snapPoints.current && ctx.snapPoints.current.length > 0;

	useScaleBackground();

	function isDeltaInDirection(delta, direction, threshold = 0) {
		if (wasBeyondThePoint) return true;

		const deltaY = Math.abs(delta.y);
		const deltaX = Math.abs(delta.x);
		const isDeltaX = deltaX > deltaY;
		const dFactor = ["bottom", "right"].includes(direction) ? 1 : -1;

		if (direction === "left" || direction === "right") {
			const isReverseDirection = delta.x * dFactor < 0;

			if (!isReverseDirection && deltaX >= 0 && deltaX <= threshold) {
				return isDeltaX;
			}
		} else {
			const isReverseDirection = delta.y * dFactor < 0;

			if (!isReverseDirection && deltaY >= 0 && deltaY <= threshold) {
				return !isDeltaX;
			}
		}

		wasBeyondThePoint = true;

		return true;
	}

	watch([() => hasSnapPoints, () => ctx.open.current], () => {
		if (hasSnapPoints && ctx.open.current) {
			window.requestAnimationFrame(() => {
				delayedSnapPoints = true;
			});
		} else {
			delayedSnapPoints = false;
		}
	});

	function handleOnPointerUp(e) {
		pointerStart = null;
		wasBeyondThePoint = false;
		ctx.onRelease(e);
	}

	function onpointerdown(e) {
		if (ctx.handleOnly.current) return;

		opts.onpointerdown.current?.(e);
		pointerStart = { x: e.pageX, y: e.pageY };
		ctx.onPress(e);
	}

	function onOpenAutoFocus(e) {
		opts.onOpenAutoFocus.current?.(e);

		if (!ctx.autoFocus.current) {
			e.preventDefault();
		}
	}

	function onInteractOutside(e) {
		opts.onInteractOutside.current?.(e);

		if (!ctx.modal.current || e.defaultPrevented) {
			e.preventDefault();

			return;
		}

		if (ctx.keyboardIsOpen.current) {
			ctx.keyboardIsOpen.current = false;
		}
	}

	function onFocusOutside(e) {
		if (!ctx.modal.current) {
			e.preventDefault();

			return;
		}
	}

	function onpointermove(e) {
		lastKnownPointerEvent = e;

		if (ctx.handleOnly.current) return;

		opts.onpointermove.current?.(e);

		if (!pointerStart) return;

		const yPosition = e.pageY - pointerStart.y;
		const xPosition = e.pageX - pointerStart.x;
		const swipeStartThreshold = e.pointerType === "touch" ? 10 : 2;
		const delta = { x: xPosition, y: yPosition };
		const isAllowedToSwipe = isDeltaInDirection(delta, ctx.direction.current, swipeStartThreshold);

		if (isAllowedToSwipe) {
			ctx.onDrag(e);
		} else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) {
			pointerStart = null;
		}
	}

	function onpointerup(e) {
		opts.onpointerup.current?.(e);
		pointerStart = null;
		wasBeyondThePoint = false;
		ctx.onRelease(e);
	}

	function onpointerout(e) {
		opts.onpointerout.current?.(e);
		handleOnPointerUp(lastKnownPointerEvent);
	}

	function oncontextmenu(e) {
		opts.oncontextmenu.current?.(e);

		if (lastKnownPointerEvent) {
			handleOnPointerUp(lastKnownPointerEvent);
		}
	}

	const props = {
		id: opts.id.current,
		"data-vaul-drawer-direction": ctx.direction.current,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": delayedSnapPoints ? "true" : "false",
		"data-vaul-snap-points": ctx.open.current && hasSnapPoints ? "true" : "false",
		"data-vaul-custom-container": ctx.container.current ? "true" : "false",
		"data-vaul-animate": ctx.shouldAnimate ? "true" : "false",
		onpointerdown,
		onOpenAutoFocus,
		onInteractOutside,
		onFocusOutside,
		onpointerup,
		onpointermove,
		onpointerout,
		oncontextmenu,
		preventScroll: ctx.modal.current
	};

	return {
		get props() {
			return props;
		},

		ctx,

		setMounted: (value) => {
			mounted = value;
		}
	};
}

function Mounted($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { onMounted } = $$props;
	});
}

function Drawer_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			id = useId(),
			ref = null,
			onOpenAutoFocus = noop,
			onInteractOutside = noop,
			onFocusOutside = noop,
			oncontextmenu = noop,
			onpointerdown = noop,
			onpointerup = noop,
			onpointerout = noop,
			onpointermove = noop,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const contentState = useDrawerContent({
			id: box.with(() => id),
			ref: box.with(() => ref, (v) => ref = v),
			oncontextmenu: box.with(() => oncontextmenu ?? noop),
			onInteractOutside: box.with(() => onInteractOutside),
			onpointerdown: box.with(() => onpointerdown ?? noop),
			onpointermove: box.with(() => onpointermove ?? noop),
			onpointerout: box.with(() => onpointerout ?? noop),
			onpointerup: box.with(() => onpointerup ?? noop),
			onOpenAutoFocus: box.with(() => onOpenAutoFocus),
			onFocusOutside: box.with(() => onFocusOutside)
		});

		const snapPointsOffset = contentState.ctx.snapPointsOffset;

		const styleProp = snapPointsOffset && snapPointsOffset.length > 0
			? {
				"--snap-point-height": `${snapPointsOffset[contentState.ctx.activeSnapPointIndex ?? 0]}px`
			}
			: {};

		const mergedProps = mergeProps(restProps, contentState.props, { style: styleProp });

		$$renderer.push(`<!---->`);

		Dialog_content($$renderer, spread_props([
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			mergedProps,

			{
				children: ($$renderer) => {
					children?.($$renderer);
					$$renderer.push(`<!----> `);
					Mounted($$renderer, { onMounted: contentState.setMounted });
					$$renderer.push(`<!---->`);
				},

				$$slots: { default: true }
			}
		]));

		$$renderer.push(`<!---->`);
		bind_props($$props, { ref });
	});
}

/* use-drawer-overlay.svelte.js generated by Svelte v5.39.6 */

function useDrawerOverlay(opts) {
	const ctx = DrawerContext.get();
	let mounted = false;

	useRefById({
		id: opts.id,
		ref: opts.ref,
		deps: () => mounted,

		onRefChange: (node) => {
			if (!mounted) {
				ctx.setOverlayNode(null);
			} else {
				ctx.setOverlayNode(node);
			}
		}
	});

	const hasSnapPoints = ctx.snapPoints.current && ctx.snapPoints.current.length > 0;
	const shouldRender = ctx.modal.current;

	const props = {
		id: opts.id.current,
		onmouseup: ctx.onRelease,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": ctx.open.current && hasSnapPoints ? "true" : "false",
		"data-vaul-snap-points-overlay": ctx.open.current && ctx.shouldFade ? "true" : "false",
		"data-vaul-animate": ctx.shouldAnimate ? "true" : "false"
	};

	return {
		get props() {
			return props;
		},

		get shouldRender() {
			return shouldRender;
		},

		setMounted: (value) => {
			mounted = value;
		}
	};
}

function Drawer_overlay$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			id = useId(),
			ref = null,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const overlayState = useDrawerOverlay({
			id: box.with(() => id),
			ref: box.with(() => ref, (v) => ref = v)
		});

		const mergedProps = mergeProps(restProps, overlayState.props);

		if (overlayState.shouldRender) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<!---->`);

			Dialog_overlay($$renderer, spread_props([
				mergedProps,

				{
					children: ($$renderer) => {
						Mounted($$renderer, { onMounted: overlayState.setMounted });
						$$renderer.push(`<!----> `);
						children?.($$renderer);
						$$renderer.push(`<!---->`);
					},

					$$slots: { default: true }
				}
			]));

			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}

function Drawer_portal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const ctx = DrawerContext.get();

		let {
			to = ctx.container.current ?? undefined,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<!---->`);
		Portal($$renderer, spread_props([{ to }, restProps]));
		$$renderer.push(`<!---->`);
	});
}

const Trigger = Dialog_trigger;

function Drawer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			shouldScaleBackground = true,
			open = false,
			activeSnapPoint = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Drawer$1($$renderer, spread_props([
				{ shouldScaleBackground },
				restProps,

				{
					get open() {
						return open;
					},

					set open($$value) {
						open = $$value;
						$$settled = false;
					},

					get activeSnapPoint() {
						return activeSnapPoint;
					},

					set activeSnapPoint($$value) {
						activeSnapPoint = $$value;
						$$settled = false;
					}
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open, activeSnapPoint });
	});
}

function Drawer_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Drawer_overlay$1($$renderer, spread_props([
				{
					'data-slot': 'drawer-overlay',
					class: cn$1("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
				},

				restProps,

				{
					get ref() {
						return ref;
					},

					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}

function Drawer_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			portalProps,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Drawer_portal($$renderer, spread_props([
				portalProps,

				{
					children: ($$renderer) => {
						Drawer_overlay($$renderer, {});
						$$renderer.push(`<!----> <!---->`);

						Drawer_content$1($$renderer, spread_props([
							{
								'data-slot': 'drawer-content',
								class: cn$1("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className)
							},

							restProps,

							{
								get ref() {
									return ref;
								},

								set ref($$value) {
									ref = $$value;
									$$settled = false;
								},

								children: ($$renderer) => {
									$$renderer.push(`<div class="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"></div> `);
									children?.($$renderer);
									$$renderer.push(`<!---->`);
								},

								$$slots: { default: true }
							}
						]));

						$$renderer.push(`<!---->`);
					},

					$$slots: { default: true }
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}

function Drawer_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Trigger($$renderer, spread_props([
				{ 'data-slot': 'drawer-trigger' },
				restProps,

				{
					get ref() {
						return ref;
					},

					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}

function Menu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { currentLang } = $$props;
		let open = false;
		const translations = useTranslations(currentLang);

		const navbarLinks = [
			{
				href: "#about",
				text: translations("components.shared.ui.navbar.about")
			},

			{
				href: "#experience",
				text: translations("components.shared.ui.navbar.experience")
			},

			// { href: "#projects", text: translations("components.shared.ui.navbar.projects") },
			{
				href: "#skills",
				text: translations("components.shared.ui.navbar.skills")
			},

			{
				href: "#contact",
				text: translations("components.shared.ui.navbar.contact")
			}
		];

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<!---->`);

			Drawer($$renderer, {
				get open() {
					return open;
				},

				set open($$value) {
					open = $$value;
					$$settled = false;
				},

				children: ($$renderer) => {
					$$renderer.push(`<!---->`);

					Drawer_trigger($$renderer, {
						class: 'cursor-pointer md:hidden',

						children: ($$renderer) => {
							BurgerMenu($$renderer);
						},

						$$slots: { default: true }
					});

					$$renderer.push(`<!----> <!---->`);

					Drawer_content($$renderer, {
						class: 'w-full h-1/2',

						children: ($$renderer) => {
							$$renderer.push(`<div class="h-full flex flex-col items-center justify-center gap-5"><!--[-->`);

							const each_array = ensure_array_like(navbarLinks);

							for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
								let { href, text } = each_array[$$index];

								$$renderer.push(`<button class="text-base font-medium">${escape_html(text)}</button>`);
							}

							$$renderer.push(`<!--]--></div>`);
						},

						$$slots: { default: true }
					});

					$$renderer.push(`<!---->`);
				},

				$$slots: { default: true }
			});

			$$renderer.push(`<!---->`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
	});
}

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentLang = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translations = useTranslations(currentLang);
  const navbarLinks = [
    { href: "#about", text: translations("components.shared.ui.navbar.about") },
    { href: "#experience", text: translations("components.shared.ui.navbar.experience") },
    // { href: "#projects", text: translations("components.shared.ui.navbar.projects") },
    { href: "#skills", text: translations("components.shared.ui.navbar.skills") },
    { href: "#contact", text: translations("components.shared.ui.navbar.contact") }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"> <div class="max-w-6xl mx-auto px-6 py-4"> <div class="mx-auto h-full flex items-center justify-between container"> <div class="flex items-center gap-5"> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Menu", Menu, { "currentLang": currentLang, "client:load": true, "client:component-hydration": "load", "client:component-path": "$ui/navbar/Menu.svelte", "client:component-export": "default" })} </div> <ul class="hidden md:flex items-center justify-center gap-5"> ${navbarLinks.map((element) => renderTemplate`${renderComponent($$result, "NavbarLink", $$NavbarLink, { "href": element.href, "text": element.text })}`)} </ul> <div class="flex items-center gap-5"> ${renderComponent($$result, "ChangeLocalePopover", ChangeLocalePopover, { "currentLang": currentLang, "currentPath": Astro2.url.pathname, "client:load": true, "client:component-hydration": "load", "client:component-path": "$ui/locale/ChangeLocalePopover.svelte", "client:component-export": "default" })} ${renderComponent($$result, "ToggleTheme", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "$ui/theme/ToggleTheme.svelte", "client:component-export": "default" })} </div> </div> </div> </header>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/shared/ui/navbar/Navbar.astro", void 0);

const $$Astro$4 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, url } = Astro2.props;
  const site = Astro2.site;
  return renderTemplate`<head><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(new URL(url, site).toString(), "href")}><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="index, follow"><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(new URL(url, site).toString(), "content")}><meta property="og:type" content="website"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${renderHead()}</head>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/seo/BaseHead.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const theme = Astro2.cookies.get(THEME_NAME)?.value ?? ETheme.LIGHT;
  const currentLang = Astro2.currentLocale || EAppLanguages.ENGLISH;
  return renderTemplate`<html${addAttribute(currentLang, "lang")}${addAttribute(`${theme} scroll-smooth`, "class")}> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png" sizes="64x64"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Jesus Diaz - Full Stack Developer</title>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Jes\xFAs D\xEDaz \u2013 Full Stack Developer", "description": "Portafolio t\xE9cnico de Jes\xFAs D\xEDaz, especializado en Astro, Svelte y UI escalable.", "url": Astro2.url.pathname })}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/layouts/Layout.astro", void 0);

function Card($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<div${attributes({
			'data-slot': 'card',
			class: clsx$1(cn$1("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)),
			...restProps
		})}>`);

		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}

function Card_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<div${attributes({
			'data-slot': 'card-content',
			class: clsx$1(cn$1("px-6", className)),
			...restProps
		})}>`);

		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}

function Card_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<div${attributes({
			'data-slot': 'card-header',
			class: clsx$1(cn$1("@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6", className)),
			...restProps
		})}>`);

		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}

function Card_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<div${attributes({
			'data-slot': 'card-title',
			class: clsx$1(cn$1("font-semibold leading-none", className)),
			...restProps
		})}>`);

		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}

const experienceTechnologies = {
  portfolio: ["Astro.js", "Svelte.js", "Tailwindcss", "Shadcn", "v0"],
  gma: [
    "Next.js",
    "TypeScript",
    "Tailwindcss",
    "Ruby on Rails",
    "PostgreSQL",
    "Vercel",
    "Railway",
    "Docker",
    "HeroUI",
    "Lucidchart",
    "TDD"
  ],
  eddu: [
    "Next.js",
    "TypeScript",
    "Tailwindcss",
    "Nodejs",
    "PostgreSQL",
    "Google Cloud Platform",
    "Docker",
    "HeroUI",
    "Lucidchart"
  ]
};

const $$Astro$2 = createAstro();
const $$MyExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MyExperience;
  const currentLang = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translations = useTranslations(currentLang);
  const experiences = [
    {
      period: translations("pages.portfolio.period"),
      title: translations("pages.portfolio.title"),
      company: translations("pages.portfolio.company"),
      description: translations("pages.portfolio.description"),
      technologies: experienceTechnologies.portfolio
    },
    {
      period: translations("pages.gma.period"),
      title: translations("pages.gma.title"),
      company: translations("pages.gma.company"),
      description: translations("pages.gma.description"),
      technologies: experienceTechnologies.gma
    },
    {
      period: translations("pages.eddu.period"),
      title: translations("pages.eddu.title"),
      company: translations("pages.eddu.company"),
      description: translations("pages.eddu.description"),
      technologies: experienceTechnologies.eddu
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 px-6 bg-muted/30"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-12 text-center text-balance">${translations("pages.professionalExperience")}</h2> <div class="space-y-8"> ${experiences.map((exp, index) => renderTemplate`${renderComponent($$result, "Card", Card, { "key": index, "class": "border-l-4 border-l-primary" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", Card_content, { "class": "p-6" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col md:flex-row md:items-start gap-4"> <div class="md:w-48 flex-shrink-0"> <p class="text-sm font-mono text-muted-foreground mb-2">${exp.period}</p> </div> <div class="flex-1"> <h3 class="text-xl font-semibold mb-1">${exp.title}</h3> <p class="text-primary font-medium mb-3">${exp.company}</p> <p class="text-muted-foreground mb-4 leading-relaxed">${exp.description}</p> <div class="flex flex-wrap gap-2"> ${exp.technologies.map((tech, techIndex) => renderTemplate`<span class="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full font-medium"> ${tech} </span>`)} </div> </div> </div> ` })} ` })}`)} </div> </div> </section>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/MyExperience.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  const currentLang = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translations = useTranslations(currentLang);
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "Java", level: 50 },
        { name: "Spring Boot", level: 40 }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git & Github", level: 80 },
        { name: "Docker", level: 50 },
        { name: "Google Cloud Platform", level: 50 },
        { name: "Jest", level: 60 }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 px-6 bg-muted/30"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-12 text-center text-balance">${translations("pages.skills")}</h2> <div class="grid md:grid-cols-3 gap-8"> ${skillCategories.map((category, index) => renderTemplate`<div class="space-y-6"> <h3 class="text-xl font-semibold text-center mb-6">${category.title}</h3> <div class="space-y-4"> ${category.skills.map((skill, skillIndex) => renderTemplate`<div> <div class="flex justify-between items-center mb-2"> <span class="text-sm font-medium">${skill.name}</span> <span class="text-xs text-muted-foreground">${skill.level}%</span> </div> <div class="w-full bg-muted rounded-full h-2"> <div class="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"${addAttribute({ width: `${skill.level}%` }, "style")}></div> </div> </div>`)} </div> </div>`)} </div> </div> </section>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/Skills.astro", void 0);

function LinkedinButton($$renderer) {
	Button($$renderer, {
		variant: 'outline',
		size: 'icon',
		asChild: true,
		class: 'cursor-pointer',

		children: ($$renderer) => {
			$$renderer.push(`<a${attr('href', LINKEDIN_URL)} target="_blank" rel="noopener noreferrer">`);
			Linkedin($$renderer);
			$$renderer.push(`<!----></a>`);
		},

		$$slots: { default: true }
	});
}

function GithubButton($$renderer) {
	Button($$renderer, {
		variant: 'outline',
		size: 'icon',
		asChild: true,
		class: 'cursor-pointer',

		children: ($$renderer) => {
			$$renderer.push(`<a${attr('href', GITHUB_URL)} target="_blank" rel="noopener noreferrer">`);
			Github($$renderer);
			$$renderer.push(`<!----></a>`);
		},

		$$slots: { default: true }
	});
}

function createContactSchema(defaultLanguage) {
  const t = useTranslations(defaultLanguage);
  return z.object({
    name: z.string({ required_error: t("utils.emails.schema.name.required") }).min(1, { message: t("utils.emails.schema.name.length") }),
    email: z.string({ required_error: t("utils.emails.schema.email.required") }).email({ message: t("utils.emails.schema.email.format") }),
    subject: z.string({ required_error: t("utils.emails.schema.subject.required") }).min(3, { message: t("utils.emails.schema.subject.length") }),
    message: z.string({ required_error: t("utils.emails.schema.message.required") }).min(10, { message: t("utils.emails.schema.message.length") })
  });
}

function Input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			value = void 0,
			type,
			files = void 0,
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		if (type === "file") {
			$$renderer.push('<!--[-->');

			$$renderer.push(`<input${attributes(
				{
					'data-slot': 'input',
					class: clsx$1(cn$1("selection:bg-primary dark:bg-input/30 selection:text-primary-foreground border-input ring-offset-background placeholder:text-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pt-1.5 text-sm font-medium outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
					type: 'file',
					...restProps
				},
				void 0,
				void 0,
				void 0,
				4
			)}/>`);
		} else {
			$$renderer.push('<!--[!-->');

			$$renderer.push(`<input${attributes(
				{
					'data-slot': 'input',
					class: clsx$1(cn$1("border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
					type,
					value,
					...restProps
				},
				void 0,
				void 0,
				void 0,
				4
			)}/>`);
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref, value, files });
	});
}

function Textarea($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			value = void 0,
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		$$renderer.push(`<textarea${attributes({
			'data-slot': 'textarea',
			class: clsx$1(cn$1("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content shadow-xs flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)),
			...restProps
		})}>`);

		const $$body = escape_html(value);

		if ($$body) {
			$$renderer.push(`${$$body}`);
		}

		$$renderer.push(`</textarea>`);
		bind_props($$props, { ref, value });
	});
}

function subscribe(store, ...callbacks) {
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get(store) {
    let value = undefined;
    subscribe(store, (_) => (value = _))();
    return value;
}

class FelteSubmitError extends Error {
    constructor(message, response) {
        super(message);
        this.name = 'FelteSubmitError';
        this.response = response;
    }
}

/** @ignore */
function _some(obj, pred) {
    const keys = Object.keys(obj);
    return keys.some((key) => pred(obj[key]));
}

/** @ignore */
function _mapValues(obj, updater) {
    const keys = Object.keys(obj || {});
    return keys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: updater(obj[key]) })), {});
}

/** @ignore */
function _isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

/** @ignore */
function _cloneDeep(obj) {
    return Object.keys(obj || {}).reduce((res, key) => (Object.assign(Object.assign({}, res), { [key]: _isPlainObject(obj[key])
            ? _cloneDeep(obj[key])
            : Array.isArray(obj[key])
                ? [...obj[key]]
                : obj[key] })), {});
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest$2(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function handleArray(value) {
    return function (propVal) {
        if (_isPlainObject(propVal)) {
            const _a = deepSet(propVal, value), field = __rest$2(_a, ["key"]);
            return field;
        }
        return value;
    };
}
/**
 * @category Helper
 */
function deepSet(obj, value) {
    return _mapValues(obj, (prop) => _isPlainObject(prop)
        ? deepSet(prop, value)
        : Array.isArray(prop)
            ? prop.map(handleArray(value))
            : value);
}

/** @ignore */
function _mergeWith(...args) {
    const customizer = args.pop();
    const _obj = args.shift();
    if (typeof _obj === "string")
        return _obj;
    const obj = _cloneDeep(_obj);
    if (args.length === 0)
        return obj;
    for (const source of args) {
        if (!source)
            continue;
        if (typeof source === "string")
            return source;
        let rsValue = customizer(obj, source);
        if (typeof rsValue !== 'undefined')
            return rsValue;
        const keys = Array.from(new Set(Object.keys(obj).concat(Object.keys(source))));
        for (const key of keys) {
            rsValue = customizer(obj[key], source[key]);
            if (typeof rsValue !== 'undefined') {
                obj[key] = rsValue;
            }
            else if (_isPlainObject(source[key]) && _isPlainObject(obj[key])) {
                obj[key] = _mergeWith(obj[key], source[key], customizer);
            }
            else if (Array.isArray(source[key])) {
                obj[key] = source[key].map((val, i) => {
                    if (!_isPlainObject(val))
                        return val;
                    const newObj = Array.isArray(obj[key]) ? obj[key][i] : obj[key];
                    return _mergeWith(newObj, val, customizer);
                });
            }
            else if (_isPlainObject(source[key])) {
                const defaultObj = deepSet(_cloneDeep(source[key]), undefined);
                obj[key] = _mergeWith(defaultObj, source[key], customizer);
            }
            else if (typeof source[key] !== 'undefined') {
                obj[key] = source[key];
            }
        }
    }
    return obj;
}

function defaultsCustomizer(objValue, srcValue) {
    if (_isPlainObject(objValue) && _isPlainObject(srcValue))
        return;
    if (Array.isArray(srcValue)) {
        if (srcValue.some(_isPlainObject))
            return;
        const objArray = Array.isArray(objValue) ? objValue : [];
        return srcValue.map((value, index) => { var _a; return (_a = objArray[index]) !== null && _a !== void 0 ? _a : value; });
    }
    if (typeof objValue !== 'undefined')
        return objValue;
}
/** @ignore */
function _defaultsDeep(...args) {
    return _mergeWith(...args, defaultsCustomizer);
}

/** @ignore */
function _merge(...args) {
    return _mergeWith(...args, () => undefined);
}

/* From: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get */
/** @ignore */
function _get(obj, path, defaultValue) {
    const travel = (regexp) => String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
}

/** @ignore */
function _update(obj, path, updater) {
    if (obj)
        obj = _cloneDeep(obj);
    if (!_isPlainObject(obj))
        obj = {};
    const splitPath = !Array.isArray(path) ? path.match(/[^.[\]]+/g) || [] : path;
    const lastSection = splitPath[splitPath.length - 1];
    if (!lastSection)
        return obj;
    let property = obj;
    for (let i = 0; i < splitPath.length - 1; i++) {
        const section = splitPath[i];
        if (!property[section] ||
            (!_isPlainObject(property[section]) && !Array.isArray(property[section]))) {
            const nextSection = splitPath[i + 1];
            if (isNaN(Number(nextSection))) {
                property[section] = {};
            }
            else {
                property[section] = [];
            }
        }
        property = property[section];
    }
    property[lastSection] = updater(property[lastSection]);
    return obj;
}

/** @ignore */
function _set(obj, path, value) {
    return _update(obj, path, () => value);
}

function _unset(obj, path) {
    if (!obj || Object(obj) !== obj)
        return;
    // When obj is not an object
    else if (typeof obj !== 'undefined')
        obj = _cloneDeep(obj);
    // If not yet an array, get the keys from the string-path
    const newPath = !Array.isArray(path)
        ? path.toString().match(/[^.[\]]+/g) || []
        : path;
    const foundProp = newPath.length === 1 ? obj : _get(obj, newPath.slice(0, -1).join('.'));
    if (Array.isArray(foundProp)) {
        foundProp.splice(Number(newPath[newPath.length - 1]), 1);
    }
    else {
        foundProp === null || foundProp === void 0 ? true : delete foundProp[newPath[newPath.length - 1]];
    }
    return obj;
}

/**
 * @category Helper
 */
function deepSome(obj, pred) {
    return _some(obj, (value) => _isPlainObject(value)
        ? deepSome(value, pred)
        : Array.isArray(value)
            ? value.length === 0 || value.every((v) => typeof v === 'string')
                ? pred(value)
                : value.some((v) => _isPlainObject(v) ? deepSome(v, pred) : pred(v))
            : pred(value));
}

/**
 * @category Helper
 */
function isInputElement(el) {
    return (el === null || el === void 0 ? void 0 : el.nodeName) === 'INPUT';
}
/**
 * @category Helper
 */
function isTextAreaElement(el) {
    return (el === null || el === void 0 ? void 0 : el.nodeName) === 'TEXTAREA';
}
/**
 * @category Helper
 */
function isSelectElement(el) {
    return (el === null || el === void 0 ? void 0 : el.nodeName) === 'SELECT';
}
/**
 * @category Helper
 */
function isFieldSetElement(el) {
    return (el === null || el === void 0 ? void 0 : el.nodeName) === 'FIELDSET';
}
/**
 * @category Helper
 */
function isFormControl(el) {
    return isInputElement(el) || isTextAreaElement(el) || isSelectElement(el);
}
/**
 * @category Helper
 */
function isElement(el) {
    return el.nodeType === Node.ELEMENT_NODE;
}

/**
 * @category Helper
 */
function getPath(el, name) {
    return name !== null && name !== void 0 ? name : (isFormControl(el) ? el.name : '');
}

/**
 * @category Helper
 */
function shouldIgnore(el) {
    let parent = el;
    while (parent && parent.nodeName !== 'FORM') {
        if (parent.hasAttribute('data-felte-ignore'))
            return true;
        parent = parent.parentElement;
    }
    return false;
}

function executeCustomizer(objValue, srcValue) {
    if (_isPlainObject(objValue) || _isPlainObject(srcValue))
        return;
    if (objValue === null || objValue === '')
        return srcValue;
    if (srcValue === null || srcValue === '')
        return objValue;
    if (!srcValue)
        return objValue;
    if (!objValue || !srcValue)
        return;
    if (Array.isArray(objValue)) {
        if (!Array.isArray(srcValue))
            return [...objValue, srcValue];
        const newErrors = [];
        const errLength = Math.max(srcValue.length, objValue.length);
        for (let i = 0; i < errLength; i++) {
            let obj = objValue[i];
            let src = srcValue[i];
            if (!_isPlainObject(obj) && !_isPlainObject(src)) {
                if (!Array.isArray(obj))
                    obj = [obj];
                if (!Array.isArray(src))
                    src = [src];
                newErrors.push(...obj, ...src);
            }
            else {
                newErrors.push(mergeErrors([obj !== null && obj !== void 0 ? obj : {}, src !== null && src !== void 0 ? src : {}]));
            }
        }
        return newErrors.filter(Boolean);
    }
    if (!Array.isArray(srcValue))
        srcValue = [srcValue];
    return [objValue, ...srcValue]
        .reduce((acc, value) => acc.concat(value), [])
        .filter(Boolean);
}
function mergeErrors(errors) {
    const merged = _mergeWith(...errors, executeCustomizer);
    return merged;
}
function runValidations(values, validationOrValidations) {
    if (!validationOrValidations)
        return [];
    const validations = Array.isArray(validationOrValidations)
        ? validationOrValidations
        : [validationOrValidations];
    return validations.map((v) => v(values));
}

function executeTransforms(values, transforms) {
    if (!transforms)
        return values;
    if (!Array.isArray(transforms))
        return transforms(values);
    return transforms.reduce((res, t) => t(res), values);
}

function createId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

function debounce(func, timeout, { onInit, onEnd } = {}) {
    let timer;
    return (...args) => {
        if (!timer)
            onInit === null || onInit === void 0 ? void 0 : onInit();
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
            timer = undefined;
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
        }, timeout);
    };
}

/**
 * @ignore
 */
function getFormControls(el) {
    if (isFormControl(el))
        return [el];
    if (el.childElementCount === 0)
        return [];
    const foundControls = new Set();
    for (const child of el.children) {
        if (isFormControl(child))
            foundControls.add(child);
        if (isFieldSetElement(child)) {
            for (const fieldsetChild of child.elements) {
                if (isFormControl(fieldsetChild))
                    foundControls.add(fieldsetChild);
            }
        }
        if (child.childElementCount > 0)
            getFormControls(child).forEach((value) => foundControls.add(value));
    }
    return Array.from(foundControls);
}
/**
 * @ignore
 */
function addAttrsFromFieldset(fieldSet) {
    for (const element of fieldSet.elements) {
        if (!isFormControl(element) && !isFieldSetElement(element))
            continue;
        if (fieldSet.hasAttribute('data-felte-keep-on-remove') &&
            !element.hasAttribute('data-felte-keep-on-remove')) {
            element.dataset.felteKeepOnRemove = fieldSet.dataset.felteKeepOnRemove;
        }
    }
}
/** @ignore */
function getInputTextOrNumber(el) {
    if (el.type.match(/^(number|range)$/)) {
        return !el.value ? null : +el.value;
    }
    else {
        return el.value;
    }
}
/**
 * @ignore
 */
function getFormDefaultValues(node) {
    var _a;
    let defaultData = {};
    let defaultTouched = {};
    for (const el of node.elements) {
        if (isFieldSetElement(el))
            addAttrsFromFieldset(el);
        if (!isFormControl(el) || !el.name)
            continue;
        const elName = getPath(el);
        if (isInputElement(el)) {
            if (el.type === 'checkbox') {
                if (typeof _get(defaultData, elName) === 'undefined') {
                    const checkboxes = Array.from(node.querySelectorAll(`[name="${el.name}"]`)).filter((checkbox) => {
                        if (!isFormControl(checkbox))
                            return false;
                        return elName === getPath(checkbox);
                    });
                    if (checkboxes.length === 1) {
                        defaultData = _set(defaultData, elName, el.checked);
                        defaultTouched = _set(defaultTouched, elName, false);
                        continue;
                    }
                    defaultData = _set(defaultData, elName, el.checked ? [el.value] : []);
                    defaultTouched = _set(defaultTouched, elName, false);
                    continue;
                }
                if (Array.isArray(_get(defaultData, elName)) && el.checked) {
                    defaultData = _update(defaultData, elName, (value) => [
                        ...value,
                        el.value,
                    ]);
                }
                continue;
            }
            if (el.type === 'radio') {
                if (_get(defaultData, elName))
                    continue;
                defaultData = _set(defaultData, elName, el.checked ? el.value : undefined);
                defaultTouched = _set(defaultTouched, elName, false);
                continue;
            }
            if (el.type === 'file') {
                defaultData = _set(defaultData, elName, el.multiple ? Array.from(el.files || []) : (_a = el.files) === null || _a === void 0 ? void 0 : _a[0]);
                defaultTouched = _set(defaultTouched, elName, false);
                continue;
            }
        }
        else if (isSelectElement(el)) {
            const multiple = el.multiple;
            if (!multiple) {
                defaultData = _set(defaultData, elName, el.value);
            }
            else {
                const selectedOptions = Array.from(el.selectedOptions).map((opt) => opt.value);
                defaultData = _set(defaultData, elName, selectedOptions);
            }
            defaultTouched = _set(defaultTouched, elName, false);
            continue;
        }
        const inputValue = getInputTextOrNumber(el);
        defaultData = _set(defaultData, elName, inputValue);
        defaultTouched = _set(defaultTouched, elName, false);
    }
    return { defaultData, defaultTouched };
}
function setControlValue(el, value) {
    var _a;
    if (!isFormControl(el))
        return;
    const fieldValue = value;
    if (isInputElement(el)) {
        if (el.type === 'checkbox') {
            const checkboxesDefaultData = fieldValue;
            if (typeof checkboxesDefaultData === 'undefined' ||
                typeof checkboxesDefaultData === 'boolean') {
                el.checked = !!checkboxesDefaultData;
                return;
            }
            if (Array.isArray(checkboxesDefaultData)) {
                if (checkboxesDefaultData.includes(el.value)) {
                    el.checked = true;
                }
                else {
                    el.checked = false;
                }
            }
            return;
        }
        if (el.type === 'radio') {
            const radioValue = fieldValue;
            if (el.value === radioValue)
                el.checked = true;
            else
                el.checked = false;
            return;
        }
        if (el.type === 'file') {
            if (value instanceof FileList) {
                el.files = value;
            }
            else if (value instanceof File && typeof DataTransfer !== 'undefined') {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(value);
                el.files = dataTransfer.files;
            }
            else if (typeof DataTransfer !== 'undefined' &&
                Array.isArray(value) &&
                value.some((v) => v instanceof File)) {
                const dataTransfer = new DataTransfer();
                for (const file of value) {
                    file instanceof File && dataTransfer.items.add(file);
                }
                el.files = dataTransfer.files;
            }
            else if (!value || (Array.isArray(value) && !value.length)) {
                el.files = null;
                el.value = '';
            }
            return;
        }
    }
    else if (isSelectElement(el)) {
        const multiple = el.multiple;
        if (!multiple) {
            el.value = String(fieldValue !== null && fieldValue !== void 0 ? fieldValue : '');
            for (const option of el.options) {
                if (option.value === String(fieldValue)) {
                    option.selected = true;
                }
                else {
                    option.selected = false;
                }
            }
        }
        else if (Array.isArray(fieldValue)) {
            el.value = String((_a = fieldValue[0]) !== null && _a !== void 0 ? _a : '');
            const stringValues = fieldValue.map((v) => String(v));
            for (const option of el.options) {
                if (stringValues.includes(option.value)) {
                    option.selected = true;
                }
                else {
                    option.selected = false;
                }
            }
        }
        return;
    }
    el.value = String(fieldValue !== null && fieldValue !== void 0 ? fieldValue : '');
}
/** Sets the form inputs value to match the data object provided. */
function setForm(node, data) {
    for (const el of node.elements) {
        if (isFieldSetElement(el))
            addAttrsFromFieldset(el);
        if (!isFormControl(el) || !el.name)
            continue;
        const elName = getPath(el);
        setControlValue(el, _get(data, elName));
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function deepSetTouched(obj, value) {
    return _mapValues(obj, (prop) => {
        if (_isPlainObject(prop))
            return deepSetTouched(prop, value);
        if (Array.isArray(prop)) {
            if (prop.length === 0 || prop.every((p) => typeof p === 'string'))
                return value;
            return prop.map((p) => {
                const _a = deepSetTouched(p, value), field = __rest$1(_a, ["key"]);
                return field;
            });
        }
        return value;
    });
}

function deepSetKey(obj) {
    if (!obj)
        return {};
    return _mapValues(obj, (prop) => {
        if (_isPlainObject(prop))
            return deepSetKey(prop);
        if (Array.isArray(prop)) {
            if (prop.length === 0 || prop.every((p) => typeof p === 'string'))
                return prop;
            return prop.map((p) => {
                if (!_isPlainObject(p))
                    return p;
                const field = deepSetKey(p);
                if (!field.key)
                    field.key = createId();
                return field;
            });
        }
        return prop;
    });
}
function deepRemoveKey(obj) {
    if (!obj)
        return {};
    return _mapValues(obj, (prop) => {
        if (_isPlainObject(prop))
            return deepRemoveKey(prop);
        if (Array.isArray(prop)) {
            if (prop.length === 0 || prop.every((p) => typeof p === 'string'))
                return prop;
            return prop.map((p) => {
                if (!_isPlainObject(p))
                    return p;
                const _a = deepRemoveKey(p), field = __rest$1(_a, ["key"]);
                return field;
            });
        }
        return prop;
    });
}

function createEventConstructors() {
    class SuccessEvent extends CustomEvent {
        constructor(detail) {
            super('feltesuccess', { detail });
        }
    }
    class ErrorEvent extends CustomEvent {
        constructor(detail) {
            super('felteerror', { detail, cancelable: true });
        }
        setErrors(errors) {
            this.preventDefault();
            this.errors = errors;
        }
    }
    class SubmitEvent extends Event {
        constructor() {
            super('feltesubmit', { cancelable: true });
        }
        handleSubmit(onSubmit) {
            this.onSubmit = onSubmit;
        }
        handleError(onError) {
            this.onError = onError;
        }
        handleSuccess(onSuccess) {
            this.onSuccess = onSuccess;
        }
    }
    return {
        createErrorEvent: (detail) => new ErrorEvent(detail),
        createSubmitEvent: () => new SubmitEvent(),
        createSuccessEvent: (detail) => new SuccessEvent(detail),
    };
}

/**
 * Creates a default submit handler for your form.
 * @param [form] - The form element to submit
 * @returns A promise that resolves to the response of the submission
 */
function createDefaultSubmitHandler(form) {
    if (!form)
        return;
    return async function onSubmit() {
        let body = new FormData(form);
        const action = new URL(form.action);
        const method = form.method.toLowerCase() === 'get'
            ? 'get'
            : action.searchParams.get('_method') || form.method;
        let enctype = form.enctype;
        if (form.querySelector('input[type="file"]')) {
            enctype = 'multipart/form-data';
        }
        if (method === 'get' || enctype === 'application/x-www-form-urlencoded') {
            body = new URLSearchParams(body);
        }
        let fetchOptions;
        if (method === 'get') {
            body.forEach((value, key) => {
                action.searchParams.append(key, value);
            });
            fetchOptions = { method, headers: { Accept: 'application/json' } };
        }
        else {
            fetchOptions = {
                method,
                body,
                headers: Object.assign(Object.assign({}, (enctype !== 'multipart/form-data' && {
                    'Content-Type': enctype,
                })), { Accept: 'application/json' }),
            };
        }
        const response = await window.fetch(action.toString(), fetchOptions);
        if (response.ok)
            return response;
        throw new FelteSubmitError('An error occurred while submitting the form', response);
    };
}

function addAtIndex(storeValue, path, value, index) {
    return _update(storeValue, path, (oldValue) => {
        if (typeof oldValue !== 'undefined' && !Array.isArray(oldValue))
            return oldValue;
        if (!oldValue)
            oldValue = [];
        if (typeof index === 'undefined') {
            oldValue.push(value);
        }
        else {
            oldValue.splice(index, 0, value);
        }
        return oldValue;
    });
}
function swapInArray(storeValue, path, from, to) {
    return _update(storeValue, path, (oldValue) => {
        if (!oldValue || !Array.isArray(oldValue))
            return oldValue;
        [oldValue[from], oldValue[to]] = [oldValue[to], oldValue[from]];
        return oldValue;
    });
}
function moveInArray(storeValue, path, from, to) {
    return _update(storeValue, path, (oldValue) => {
        if (!oldValue || !Array.isArray(oldValue))
            return oldValue;
        oldValue.splice(to, 0, oldValue.splice(from, 1)[0]);
        return oldValue;
    });
}
function isUpdater(value) {
    return typeof value === 'function';
}
function createSetHelper(storeSetter) {
    const setHelper = (pathOrValue, valueOrUpdater) => {
        if (typeof pathOrValue === 'string') {
            const path = pathOrValue;
            storeSetter((oldValue) => {
                const newValue = isUpdater(valueOrUpdater)
                    ? valueOrUpdater(_get(oldValue, path))
                    : valueOrUpdater;
                return _set(oldValue, path, newValue);
            });
        }
        else {
            storeSetter((oldValue) => isUpdater(pathOrValue) ? pathOrValue(oldValue) : pathOrValue);
        }
    };
    return setHelper;
}
function createHelpers({ stores, config, validateErrors, validateWarnings, _getCurrentExtenders, }) {
    var _a;
    let formNode;
    let initialValues = deepSetKey(((_a = config.initialValues) !== null && _a !== void 0 ? _a : {}));
    const { data, touched, errors, warnings, isDirty, isSubmitting, interacted } = stores;
    const setData = createSetHelper(data.update);
    const setTouched = createSetHelper(touched.update);
    const setErrors = createSetHelper(errors.update);
    const setWarnings = createSetHelper(warnings.update);
    function updateFields(updater) {
        setData((oldData) => {
            const newData = updater(oldData);
            if (formNode)
                setForm(formNode, newData);
            return newData;
        });
    }
    const setFields = (pathOrValue, valueOrUpdater, shouldTouch) => {
        const fieldsSetter = createSetHelper(updateFields);
        fieldsSetter(pathOrValue, valueOrUpdater);
        if (typeof pathOrValue === 'string' && shouldTouch) {
            setTouched(pathOrValue, true);
        }
    };
    function addField(path, value, index) {
        const touchedValue = _isPlainObject(value)
            ? deepSetTouched(value, false)
            : false;
        const errValue = _isPlainObject(touchedValue)
            ? deepSet(touchedValue, [])
            : [];
        value = _isPlainObject(value) ? Object.assign(Object.assign({}, value), { key: createId() }) : value;
        errors.update(($errors) => {
            return addAtIndex($errors, path, errValue, index);
        });
        warnings.update(($warnings) => {
            return addAtIndex($warnings, path, errValue, index);
        });
        touched.update(($touched) => {
            return addAtIndex($touched, path, touchedValue, index);
        });
        data.update(($data) => {
            const newData = addAtIndex($data, path, value, index);
            setTimeout(() => formNode && setForm(formNode, newData));
            return newData;
        });
    }
    function updateAll(updater) {
        errors.update(updater);
        warnings.update(updater);
        touched.update(updater);
        data.update(($data) => {
            const newData = updater($data);
            setTimeout(() => formNode && setForm(formNode, newData));
            return newData;
        });
    }
    function unsetField(path) {
        updateAll((storeValue) => _unset(storeValue, path));
    }
    function swapFields(path, from, to) {
        updateAll((storeValue) => swapInArray(storeValue, path, from, to));
    }
    function moveField(path, from, to) {
        updateAll((storeValue) => moveInArray(storeValue, path, from, to));
    }
    function resetField(path) {
        const initialValue = _get(initialValues, path);
        const touchedValue = _isPlainObject(initialValue)
            ? deepSetTouched(initialValue, false)
            : false;
        const errValue = _isPlainObject(touchedValue)
            ? deepSet(touchedValue, [])
            : [];
        data.update(($data) => {
            const newData = _set($data, path, initialValue);
            if (formNode)
                setForm(formNode, newData);
            return newData;
        });
        touched.update(($touched) => {
            return _set($touched, path, touchedValue);
        });
        errors.update(($errors) => {
            return _set($errors, path, errValue);
        });
        warnings.update(($warnings) => {
            return _set($warnings, path, errValue);
        });
    }
    const setIsSubmitting = createSetHelper(isSubmitting.update);
    const setIsDirty = createSetHelper(isDirty.update);
    const setInteracted = createSetHelper(interacted.update);
    async function validate() {
        const currentData = get(data);
        touched.set(deepSetTouched(currentData, true));
        interacted.set(null);
        const currentErrors = await validateErrors(currentData);
        await validateWarnings(currentData);
        return currentErrors;
    }
    function reset() {
        setFields(_cloneDeep(initialValues));
        setTouched(($touched) => deepSet($touched, false));
        interacted.set(null);
        isDirty.set(false);
    }
    function createSubmitHandler(altConfig) {
        return async function handleSubmit(event) {
            var _a, _b, _c, _d, _e, _f, _g;
            const { createErrorEvent, createSubmitEvent, createSuccessEvent } = createEventConstructors();
            const submitEvent = createSubmitEvent();
            formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(submitEvent);
            const onError = (_b = (_a = submitEvent.onError) !== null && _a !== void 0 ? _a : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onError) !== null && _b !== void 0 ? _b : config.onError;
            const onSuccess = (_d = (_c = submitEvent.onSuccess) !== null && _c !== void 0 ? _c : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onSuccess) !== null && _d !== void 0 ? _d : config.onSuccess;
            const onSubmit = (_g = (_f = (_e = submitEvent.onSubmit) !== null && _e !== void 0 ? _e : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onSubmit) !== null && _f !== void 0 ? _f : config.onSubmit) !== null && _g !== void 0 ? _g : createDefaultSubmitHandler(formNode);
            if (!onSubmit)
                return;
            event === null || event === void 0 ? void 0 : event.preventDefault();
            if (submitEvent.defaultPrevented)
                return;
            isSubmitting.set(true);
            interacted.set(null);
            const currentData = deepRemoveKey(get(data));
            const currentErrors = await validateErrors(currentData, altConfig === null || altConfig === void 0 ? void 0 : altConfig.validate);
            const currentWarnings = await validateWarnings(currentData, altConfig === null || altConfig === void 0 ? void 0 : altConfig.warn);
            if (currentWarnings)
                warnings.set(_merge(deepSet(currentData, []), currentWarnings));
            touched.set(deepSetTouched(currentData, true));
            if (currentErrors) {
                touched.set(deepSetTouched(currentErrors, true));
                const hasErrors = deepSome(currentErrors, (error) => Array.isArray(error) ? error.length >= 1 : !!error);
                if (hasErrors) {
                    await new Promise((r) => setTimeout(r));
                    _getCurrentExtenders().forEach((extender) => {
                        var _a;
                        return (_a = extender.onSubmitError) === null || _a === void 0 ? void 0 : _a.call(extender, {
                            data: currentData,
                            errors: currentErrors,
                        });
                    });
                    isSubmitting.set(false);
                    return;
                }
            }
            const context = {
                event,
                setFields,
                setData,
                setTouched,
                setErrors,
                setWarnings,
                unsetField,
                addField,
                resetField,
                reset,
                setInitialValues: publicHelpers.setInitialValues,
                moveField,
                swapFields,
                form: formNode,
                controls: formNode && Array.from(formNode.elements).filter(isFormControl),
                config: Object.assign(Object.assign({}, config), altConfig),
            };
            try {
                const response = await onSubmit(currentData, context);
                formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(createSuccessEvent(Object.assign({ response }, context)));
                await (onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(response, context));
            }
            catch (e) {
                const errorEvent = createErrorEvent(Object.assign({ error: e }, context));
                formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(errorEvent);
                if (!onError && !errorEvent.defaultPrevented) {
                    throw e;
                }
                if (!onError && !errorEvent.errors)
                    return;
                const serverErrors = errorEvent.errors || (await (onError === null || onError === void 0 ? void 0 : onError(e, context)));
                if (serverErrors) {
                    touched.set(deepSetTouched(serverErrors, true));
                    errors.set(serverErrors);
                    await new Promise((r) => setTimeout(r));
                    _getCurrentExtenders().forEach((extender) => {
                        var _a;
                        return (_a = extender.onSubmitError) === null || _a === void 0 ? void 0 : _a.call(extender, {
                            data: currentData,
                            errors: get(errors),
                        });
                    });
                }
            }
            finally {
                isSubmitting.set(false);
            }
        };
    }
    const publicHelpers = {
        setData,
        setFields,
        setTouched,
        setErrors,
        setWarnings,
        setIsSubmitting,
        setIsDirty,
        setInteracted,
        validate,
        reset,
        unsetField,
        resetField,
        addField,
        swapFields,
        moveField,
        createSubmitHandler,
        handleSubmit: createSubmitHandler(),
        setInitialValues: (values) => {
            initialValues = deepSetKey(values);
        },
    };
    const privateHelpers = {
        _setFormNode(node) {
            formNode = node;
        },
        _getInitialValues: () => initialValues,
    };
    return {
        public: publicHelpers,
        private: privateHelpers,
    };
}

function createFormAction({ helpers, stores, config, extender, createSubmitHandler, handleSubmit, _setFormNode, _getInitialValues, _setCurrentExtenders, _getCurrentExtenders, }) {
    const { setFields, setTouched, reset, setInitialValues } = helpers;
    const { addValidator, addTransformer, validate } = helpers;
    const { data, errors, warnings, touched, isSubmitting, isDirty, interacted, isValid, isValidating, } = stores;
    function form(node) {
        if (!node.requestSubmit)
            node.requestSubmit = handleSubmit;
        function callExtender(stage) {
            return function (extender) {
                return extender({
                    form: node,
                    stage,
                    controls: Array.from(node.elements).filter(isFormControl),
                    data,
                    errors,
                    warnings,
                    touched,
                    isValid,
                    isValidating,
                    isSubmitting,
                    isDirty,
                    interacted,
                    config,
                    addValidator,
                    addTransformer,
                    setFields,
                    validate,
                    reset,
                    createSubmitHandler,
                    handleSubmit,
                });
            };
        }
        _setCurrentExtenders(extender.map(callExtender('MOUNT')));
        node.noValidate = !!config.validate;
        const { defaultData, defaultTouched } = getFormDefaultValues(node);
        _setFormNode(node);
        setInitialValues(_merge(_cloneDeep(defaultData), _getInitialValues()));
        setFields(_getInitialValues());
        touched.set(defaultTouched);
        function setCheckboxValues(target) {
            const elPath = getPath(target);
            const checkboxes = Array.from(node.querySelectorAll(`[name="${target.name}"]`)).filter((checkbox) => {
                if (!isFormControl(checkbox))
                    return false;
                return elPath === getPath(checkbox);
            });
            if (checkboxes.length === 0)
                return;
            if (checkboxes.length === 1) {
                return data.update(($data) => _set($data, getPath(target), target.checked));
            }
            return data.update(($data) => {
                return _set($data, getPath(target), checkboxes
                    .filter(isInputElement)
                    .filter((el) => el.checked)
                    .map((el) => el.value));
            });
        }
        function setRadioValues(target) {
            const radios = node.querySelectorAll(`[name="${target.name}"]`);
            const checkedRadio = Array.from(radios).find((el) => isInputElement(el) && el.checked);
            data.update(($data) => _set($data, getPath(target), checkedRadio === null || checkedRadio === void 0 ? void 0 : checkedRadio.value));
        }
        function setFileValue(target) {
            var _a;
            const files = Array.from((_a = target.files) !== null && _a !== void 0 ? _a : []);
            data.update(($data) => {
                return _set($data, getPath(target), target.multiple ? files : files[0]);
            });
        }
        function setSelectValue(target) {
            if (!target.multiple) {
                data.update(($data) => {
                    return _set($data, getPath(target), target.value);
                });
            }
            else {
                const selectedOptions = Array.from(target.selectedOptions).map((opt) => opt.value);
                data.update(($data) => {
                    return _set($data, getPath(target), selectedOptions);
                });
            }
        }
        function handleInput(e) {
            const target = e.target;
            if (!target ||
                !isFormControl(target) ||
                isSelectElement(target) ||
                shouldIgnore(target))
                return;
            if (['checkbox', 'radio', 'file'].includes(target.type))
                return;
            if (!target.name)
                return;
            isDirty.set(true);
            const inputValue = getInputTextOrNumber(target);
            interacted.set(target.name);
            data.update(($data) => {
                return _set($data, getPath(target), inputValue);
            });
        }
        function handleChange(e) {
            const target = e.target;
            if (!target || !isFormControl(target) || shouldIgnore(target))
                return;
            if (!target.name)
                return;
            setTouched(getPath(target), true);
            interacted.set(target.name);
            if (isSelectElement(target) ||
                ['checkbox', 'radio', 'file', 'hidden'].includes(target.type)) {
                isDirty.set(true);
            }
            if (target.type === 'hidden') {
                data.update(($data) => {
                    return _set($data, getPath(target), target.value);
                });
            }
            if (isSelectElement(target))
                setSelectValue(target);
            else if (!isInputElement(target))
                return;
            else if (target.type === 'checkbox')
                setCheckboxValues(target);
            else if (target.type === 'radio')
                setRadioValues(target);
            else if (target.type === 'file')
                setFileValue(target);
        }
        function handleBlur(e) {
            const target = e.target;
            if (!target || !isFormControl(target) || shouldIgnore(target))
                return;
            if (!target.name)
                return;
            setTouched(getPath(target), true);
            interacted.set(target.name);
        }
        function handleReset(e) {
            e.preventDefault();
            reset();
        }
        const mutationOptions = { childList: true, subtree: true };
        function unsetTaggedForRemove(formControls) {
            let currentData = get(data);
            let currentTouched = get(touched);
            let currentErrors = get(errors);
            let currentWarnings = get(warnings);
            for (const control of formControls.reverse()) {
                if (control.hasAttribute('data-felte-keep-on-remove') &&
                    control.dataset.felteKeepOnRemove !== 'false')
                    continue;
                const fieldArrayReg = /.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;
                let fieldName = getPath(control);
                const shape = get(touched);
                const isFieldArray = fieldArrayReg.test(fieldName);
                if (isFieldArray) {
                    const arrayPath = fieldName.split('.').slice(0, -1).join('.');
                    const valueToRemove = _get(shape, arrayPath);
                    if (_isPlainObject(valueToRemove) &&
                        Object.keys(valueToRemove).length <= 1) {
                        fieldName = arrayPath;
                    }
                }
                currentData = _unset(currentData, fieldName);
                currentTouched = _unset(currentTouched, fieldName);
                currentErrors = _unset(currentErrors, fieldName);
                currentWarnings = _unset(currentWarnings, fieldName);
            }
            data.set(currentData);
            touched.set(currentTouched);
            errors.set(currentErrors);
            warnings.set(currentWarnings);
        }
        const updateAddedNodes = debounce(() => {
            _getCurrentExtenders().forEach((extender) => { var _a; return (_a = extender.destroy) === null || _a === void 0 ? void 0 : _a.call(extender); });
            _setCurrentExtenders(extender.map(callExtender('UPDATE')));
            const { defaultData: newDefaultData, defaultTouched: newDefaultTouched } = getFormDefaultValues(node);
            data.update(($data) => _defaultsDeep($data, newDefaultData));
            touched.update(($touched) => {
                return _defaultsDeep($touched, newDefaultTouched);
            });
            helpers.setFields(get(data));
        }, 0);
        let removedFormControls = [];
        const updateRemovedNodes = debounce(() => {
            _getCurrentExtenders().forEach((extender) => { var _a; return (_a = extender.destroy) === null || _a === void 0 ? void 0 : _a.call(extender); });
            _setCurrentExtenders(extender.map(callExtender('UPDATE')));
            unsetTaggedForRemove(removedFormControls);
            removedFormControls = [];
        }, 0);
        function handleNodeAddition(mutation) {
            const shouldUpdate = Array.from(mutation.addedNodes).some((node) => {
                if (!isElement(node))
                    return false;
                if (isFormControl(node))
                    return true;
                const formControls = getFormControls(node);
                return formControls.length > 0;
            });
            if (!shouldUpdate)
                return;
            updateAddedNodes();
        }
        function handleNodeRemoval(mutation) {
            for (const removedNode of mutation.removedNodes) {
                if (!isElement(removedNode))
                    continue;
                const formControls = getFormControls(removedNode);
                if (formControls.length === 0)
                    continue;
                removedFormControls.push(...formControls);
                updateRemovedNodes();
            }
        }
        function mutationCallback(mutationList) {
            for (const mutation of mutationList) {
                if (mutation.type !== 'childList')
                    continue;
                if (mutation.addedNodes.length > 0)
                    handleNodeAddition(mutation);
                if (mutation.removedNodes.length > 0)
                    handleNodeRemoval(mutation);
            }
        }
        const observer = new MutationObserver(mutationCallback);
        observer.observe(node, mutationOptions);
        node.addEventListener('input', handleInput);
        node.addEventListener('change', handleChange);
        node.addEventListener('focusout', handleBlur);
        node.addEventListener('submit', handleSubmit);
        node.addEventListener('reset', handleReset);
        const unsubscribeErrors = errors.subscribe(($errors) => {
            for (const el of node.elements) {
                if (!isFormControl(el) || !el.name)
                    continue;
                const fieldErrors = _get($errors, getPath(el));
                const message = Array.isArray(fieldErrors)
                    ? fieldErrors.join('\n')
                    : typeof fieldErrors === 'string'
                        ? fieldErrors
                        : undefined;
                if (message === el.dataset.felteValidationMessage)
                    continue;
                if (message) {
                    el.dataset.felteValidationMessage = message;
                    el.setAttribute('aria-invalid', 'true');
                }
                else {
                    delete el.dataset.felteValidationMessage;
                    el.removeAttribute('aria-invalid');
                }
            }
        });
        return {
            destroy() {
                observer.disconnect();
                node.removeEventListener('input', handleInput);
                node.removeEventListener('change', handleChange);
                node.removeEventListener('focusout', handleBlur);
                node.removeEventListener('submit', handleSubmit);
                node.removeEventListener('reset', handleReset);
                unsubscribeErrors();
                _getCurrentExtenders().forEach((extender) => { var _a; return (_a = extender.destroy) === null || _a === void 0 ? void 0 : _a.call(extender); });
            },
        };
    }
    return { form };
}

function createValidationController(priority) {
    const signal = { aborted: false, priority };
    return {
        signal,
        abort() {
            signal.aborted = true;
        },
    };
}
function errorFilterer(touchValue, errValue) {
    if (_isPlainObject(touchValue)) {
        if (!errValue ||
            (_isPlainObject(errValue) && Object.keys(errValue).length === 0)) {
            return deepSet(touchValue, null);
        }
        return;
    }
    if (Array.isArray(touchValue)) {
        if (touchValue.some(_isPlainObject))
            return;
        const errArray = Array.isArray(errValue) ? errValue : [];
        return touchValue.map((value, index) => {
            const err = errArray[index];
            if (Array.isArray(err) && err.length === 0)
                return null;
            return (value && err) || null;
        });
    }
    if (Array.isArray(errValue) && errValue.length === 0)
        return null;
    if (Array.isArray(errValue))
        return touchValue ? errValue : null;
    return touchValue && errValue ? [errValue] : null;
}
function warningFilterer(touchValue, errValue) {
    if (_isPlainObject(touchValue)) {
        if (!errValue ||
            (_isPlainObject(errValue) && Object.keys(errValue).length === 0)) {
            return deepSet(touchValue, null);
        }
        return;
    }
    if (Array.isArray(touchValue)) {
        if (touchValue.some(_isPlainObject))
            return;
        const errArray = Array.isArray(errValue) ? errValue : [];
        return touchValue.map((_, index) => {
            const err = errArray[index];
            if (Array.isArray(err) && err.length === 0)
                return null;
            return err || null;
        });
    }
    if (Array.isArray(errValue) && errValue.length === 0)
        return null;
    if (Array.isArray(errValue))
        return errValue;
    return errValue ? [errValue] : null;
}
function filterErrors([errors, touched]) {
    return _mergeWith(touched, errors, errorFilterer);
}
function filterWarnings([errors, touched]) {
    return _mergeWith(touched, errors, warningFilterer);
}
// A `derived` store factory that can defer subscription and be constructed
// with any store factory.
function createDerivedFactory(storeFactory) {
    return function derived(storeOrStores, deriver, initialValue) {
        const stores = Array.isArray(storeOrStores)
            ? storeOrStores
            : [storeOrStores];
        const values = new Array(stores.length);
        const derivedStore = storeFactory(initialValue);
        const storeSet = derivedStore.set;
        const storeSubscribe = derivedStore.subscribe;
        let unsubscribers;
        function startStore() {
            unsubscribers = stores.map((store, index) => {
                return store.subscribe(($store) => {
                    values[index] = $store;
                    storeSet(deriver(values));
                });
            });
        }
        function stopStore() {
            unsubscribers === null || unsubscribers === void 0 ? void 0 : unsubscribers.forEach((unsub) => unsub());
        }
        derivedStore.subscribe = function subscribe(subscriber) {
            const unsubscribe = storeSubscribe(subscriber);
            return () => {
                unsubscribe();
            };
        };
        return [derivedStore, startStore, stopStore];
    };
}
function createStores(storeFactory, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const derived = createDerivedFactory(storeFactory);
    const initialValues = (config.initialValues = config.initialValues
        ? deepSetKey(executeTransforms(_cloneDeep(config.initialValues), config.transform))
        : {});
    const initialTouched = deepSetTouched(deepRemoveKey(initialValues), false);
    const touched = storeFactory(initialTouched);
    const validationCount = storeFactory(0);
    const [isValidating, startIsValidating, stopIsValidating] = derived([touched, validationCount], ([$touched, $validationCount]) => {
        const isTouched = deepSome($touched, (t) => !!t);
        return isTouched && $validationCount >= 1;
    }, false);
    // It is important not to destructure stores created with the factory
    // since some stores may be callable.
    delete isValidating.set;
    delete isValidating.update;
    function cancellableValidation(store) {
        let activeController;
        return async function executeValidations($data, shape, validations, priority = false) {
            if (!validations || !$data)
                return;
            let current = shape && Object.keys(shape).length > 0
                ? shape
                : deepSet($data, []);
            // Keeping a controller allows us to cancel previous asynchronous
            // validations if they've become stale.
            const controller = createValidationController(priority);
            // By assigning `priority` we can prevent specific validations
            // from being aborted. Used when submitting the form or
            // calling the `validate` helper.
            if (!(activeController === null || activeController === void 0 ? void 0 : activeController.signal.priority) || priority) {
                activeController === null || activeController === void 0 ? void 0 : activeController.abort();
                activeController = controller;
            }
            // If the current controller has priority and we're not trying to
            // override it, completely prevent validations
            if (activeController.signal.priority && !priority)
                return;
            validationCount.update((c) => c + 1);
            const results = runValidations(deepRemoveKey($data), validations);
            results.forEach(async (promise) => {
                const result = await promise;
                if (controller.signal.aborted)
                    return;
                current = mergeErrors([current, result]);
                store.set(current);
            });
            await Promise.all(results);
            activeController = undefined;
            validationCount.update((c) => c - 1);
            return current;
        };
    }
    let storesShape = deepSet(initialTouched, []);
    const data = storeFactory(initialValues);
    const initialErrors = deepSet(initialTouched, []);
    const immediateErrors = storeFactory(initialErrors);
    const debouncedErrors = storeFactory(_cloneDeep(initialErrors));
    const [errors, startErrors, stopErrors] = derived([
        immediateErrors,
        debouncedErrors,
    ], mergeErrors, _cloneDeep(initialErrors));
    const initialWarnings = deepSet(initialTouched, []);
    const immediateWarnings = storeFactory(initialWarnings);
    const debouncedWarnings = storeFactory(_cloneDeep(initialWarnings));
    const [warnings, startWarnings, stopWarnings] = derived([
        immediateWarnings,
        debouncedWarnings,
    ], mergeErrors, _cloneDeep(initialWarnings));
    const [filteredErrors, startFilteredErrors, stopFilteredErrors] = derived([errors, touched], filterErrors, _cloneDeep(initialErrors));
    const [filteredWarnings, startFilteredWarnings, stopFilteredWarnings] = derived([warnings, touched], filterWarnings, _cloneDeep(initialWarnings));
    // This is necessary since, on the first run, validations
    // have not run yet. We assume the form is not valid in the first calling
    // if there's validation functions assigned in the configuration.
    let firstCalled = false;
    const [isValid, startIsValid, stopIsValid] = derived(errors, ([$errors]) => {
        var _a;
        if (!firstCalled) {
            firstCalled = true;
            return !config.validate && !((_a = config.debounced) === null || _a === void 0 ? void 0 : _a.validate);
        }
        else {
            return !deepSome($errors, (error) => Array.isArray(error) ? error.length >= 1 : !!error);
        }
    }, !config.validate && !((_a = config.debounced) === null || _a === void 0 ? void 0 : _a.validate));
    delete isValid.set;
    delete isValid.update;
    const isSubmitting = storeFactory(false);
    const isDirty = storeFactory(false);
    const interacted = storeFactory(null);
    const validateErrors = cancellableValidation(immediateErrors);
    const validateWarnings = cancellableValidation(immediateWarnings);
    const validateDebouncedErrors = cancellableValidation(debouncedErrors);
    const validateDebouncedWarnings = cancellableValidation(debouncedWarnings);
    const _validateDebouncedErrors = debounce(validateDebouncedErrors, (_e = (_c = (_b = config.debounced) === null || _b === void 0 ? void 0 : _b.validateTimeout) !== null && _c !== void 0 ? _c : (_d = config.debounced) === null || _d === void 0 ? void 0 : _d.timeout) !== null && _e !== void 0 ? _e : 300, {
        onInit: () => {
            validationCount.update((c) => c + 1);
        },
        onEnd: () => {
            validationCount.update((c) => c - 1);
        },
    });
    const _validateDebouncedWarnings = debounce(validateDebouncedWarnings, (_j = (_g = (_f = config.debounced) === null || _f === void 0 ? void 0 : _f.warnTimeout) !== null && _g !== void 0 ? _g : (_h = config.debounced) === null || _h === void 0 ? void 0 : _h.timeout) !== null && _j !== void 0 ? _j : 300);
    async function executeErrorsValidation(data, altValidate) {
        var _a;
        const errors = validateErrors(data, storesShape, altValidate !== null && altValidate !== void 0 ? altValidate : config.validate, true);
        if (altValidate)
            return errors;
        const debouncedErrors = validateDebouncedErrors(data, storesShape, (_a = config.debounced) === null || _a === void 0 ? void 0 : _a.validate, true);
        return mergeErrors(await Promise.all([errors, debouncedErrors]));
    }
    async function executeWarningsValidation(data, altWarn) {
        var _a;
        const warnings = validateWarnings(data, storesShape, altWarn !== null && altWarn !== void 0 ? altWarn : config.warn, true);
        if (altWarn)
            return warnings;
        const debouncedWarnings = validateDebouncedWarnings(data, storesShape, (_a = config.debounced) === null || _a === void 0 ? void 0 : _a.warn, true);
        return mergeErrors(await Promise.all([warnings, debouncedWarnings]));
    }
    let errorsValue = initialErrors;
    let warningsValue = initialWarnings;
    function start() {
        const dataUnsubscriber = data.subscribe(($keyedData) => {
            var _a, _b;
            const $data = deepRemoveKey($keyedData);
            validateErrors($data, storesShape, config.validate);
            validateWarnings($data, storesShape, config.warn);
            _validateDebouncedErrors($data, storesShape, (_a = config.debounced) === null || _a === void 0 ? void 0 : _a.validate);
            _validateDebouncedWarnings($data, storesShape, (_b = config.debounced) === null || _b === void 0 ? void 0 : _b.warn);
        });
        const unsubscribeTouched = touched.subscribe(($touched) => {
            storesShape = deepSet($touched, []);
        });
        const unsubscribeErrors = errors.subscribe(($errors) => {
            errorsValue = $errors;
        });
        const unsubscribeWarnings = warnings.subscribe(($warnings) => {
            warningsValue = $warnings;
        });
        startErrors();
        startIsValid();
        startWarnings();
        startFilteredErrors();
        startFilteredWarnings();
        startIsValidating();
        function cleanup() {
            dataUnsubscriber();
            stopFilteredErrors();
            stopErrors();
            stopWarnings();
            stopFilteredWarnings();
            stopIsValid();
            stopIsValidating();
            unsubscribeTouched();
            unsubscribeErrors();
            unsubscribeWarnings();
        }
        return cleanup;
    }
    function publicErrorsUpdater(updater) {
        immediateErrors.set(updater(errorsValue));
        debouncedErrors.set({});
    }
    function publicWarningsUpdater(updater) {
        immediateWarnings.set(updater(warningsValue));
        debouncedWarnings.set({});
    }
    function publicErrorsSetter(value) {
        publicErrorsUpdater(() => value);
    }
    function publicWarningsSetter(value) {
        publicWarningsUpdater(() => value);
    }
    filteredErrors.set = publicErrorsSetter;
    filteredErrors.update = publicErrorsUpdater;
    filteredWarnings.set = publicWarningsSetter;
    filteredWarnings.update =
        publicWarningsUpdater;
    return {
        data: data,
        errors: filteredErrors,
        warnings: filteredWarnings,
        touched,
        isValid,
        isSubmitting,
        isDirty,
        isValidating,
        interacted,
        validateErrors: executeErrorsValidation,
        validateWarnings: executeWarningsValidation,
        cleanup: config.preventStoreStart ? () => undefined : start(),
        start,
    };
}

function createForm$1(config, adapters) {
    var _a, _b;
    (_a = config.extend) !== null && _a !== void 0 ? _a : (config.extend = []);
    (_b = config.debounced) !== null && _b !== void 0 ? _b : (config.debounced = {});
    if (config.validate && !Array.isArray(config.validate))
        config.validate = [config.validate];
    if (config.debounced.validate && !Array.isArray(config.debounced.validate))
        config.debounced.validate = [config.debounced.validate];
    if (config.transform && !Array.isArray(config.transform))
        config.transform = [config.transform];
    if (config.warn && !Array.isArray(config.warn))
        config.warn = [config.warn];
    if (config.debounced.warn && !Array.isArray(config.debounced.warn))
        config.debounced.warn = [config.debounced.warn];
    function addValidator(validator, { debounced, level } = {
        debounced: false,
        level: 'error',
    }) {
        var _a;
        const prop = level === 'error' ? 'validate' : 'warn';
        (_a = config.debounced) !== null && _a !== void 0 ? _a : (config.debounced = {});
        const validateConfig = debounced ? config.debounced : config;
        if (!validateConfig[prop]) {
            validateConfig[prop] = [validator];
        }
        else {
            validateConfig[prop] = [
                ...validateConfig[prop],
                validator,
            ];
        }
    }
    function addTransformer(transformer) {
        if (!config.transform) {
            config.transform = [transformer];
        }
        else {
            config.transform = [
                ...config.transform,
                transformer,
            ];
        }
    }
    const extender = Array.isArray(config.extend)
        ? config.extend
        : [config.extend];
    let currentExtenders = [];
    const _getCurrentExtenders = () => currentExtenders;
    const _setCurrentExtenders = (extenders) => {
        currentExtenders = extenders;
    };
    const { isSubmitting, isValidating, data, errors, warnings, touched, isValid, isDirty, cleanup, start, validateErrors, validateWarnings, interacted, } = createStores(adapters.storeFactory, config);
    const originalUpdate = data.update;
    const originalSet = data.set;
    const transUpdate = (updater) => originalUpdate((values) => deepSetKey(executeTransforms(updater(values), config.transform)));
    const transSet = (values) => originalSet(deepSetKey(executeTransforms(values, config.transform)));
    data.update = transUpdate;
    data.set = transSet;
    const helpers = createHelpers({
        config,
        validateErrors,
        validateWarnings,
        _getCurrentExtenders,
        stores: {
            data,
            errors,
            warnings,
            touched,
            isSubmitting,
            isDirty,
            interacted,
        },
    });
    const { createSubmitHandler, handleSubmit } = helpers.public;
    currentExtenders = extender.map((extender) => extender({
        stage: 'SETUP',
        errors,
        warnings,
        touched,
        data,
        isDirty,
        isValid,
        isValidating,
        isSubmitting,
        interacted,
        config,
        addValidator,
        addTransformer,
        setFields: helpers.public.setFields,
        reset: helpers.public.reset,
        validate: helpers.public.validate,
        handleSubmit,
        createSubmitHandler,
    }));
    const formActionConfig = Object.assign({ config, stores: {
            data,
            touched,
            errors,
            warnings,
            isSubmitting,
            isValidating,
            isValid,
            isDirty,
            interacted,
        }, createSubmitHandler,
        handleSubmit, helpers: Object.assign(Object.assign({}, helpers.public), { addTransformer,
            addValidator }), extender,
        _getCurrentExtenders,
        _setCurrentExtenders }, helpers.private);
    const { form } = createFormAction(formActionConfig);
    return Object.assign({ data,
        errors,
        warnings,
        touched,
        isValid,
        isSubmitting,
        isValidating,
        isDirty,
        interacted,
        form,
        cleanup, startStores: start }, helpers.public);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function createForm(config) {
    const _a = createForm$1(config !== null && config !== void 0 ? config : {}, {
        storeFactory: writable,
    }), { cleanup, startStores } = _a, rest = __rest(_a, ["cleanup", "startStores"]);
    onDestroy(cleanup);
    return rest;
}

const contactFormInitialValues = {
  email: "",
  message: "",
  name: "",
  subject: ""
};

function Spinner($$renderer) {
	$$renderer.push(`<div class="inline-flex items-center justify-center animate-spin">`);
	Spinner$1($$renderer);
	$$renderer.push(`<!----></div>`);
}

const bars = Array(12).fill(0);

function Loader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {

		let { visible, class: className } = $$props;

		$$renderer.push(`<div${attr_class(clsx$1(['sonner-loading-wrapper', className].filter(Boolean).join(' ')))}${attr('data-visible', visible)}><div class="sonner-spinner"><!--[-->`);

		const each_array = ensure_array_like(bars);

		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			each_array[i];

			$$renderer.push(`<div class="sonner-loading-bar"></div>`);
		}

		$$renderer.push(`<!--]--></div></div>`);
	});
}

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
const isBrowser$1 = typeof document !== 'undefined';

const defaultWindow$1 = undefined;

/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement$1(document) {
    let activeElement = document.activeElement;
    while (activeElement?.shadowRoot) {
        const node = activeElement.shadowRoot.activeElement;
        if (node === activeElement)
            break;
        else
            activeElement = node;
    }
    return activeElement;
}

/* active-element.svelte.js generated by Svelte v5.39.6 */

let ActiveElement$1 = class ActiveElement {
	#document;
	#subscribe;

	constructor(options = {}) {
		const { window = defaultWindow$1, document = window?.document } = options;

		if (window === undefined) return;

		this.#document = document;

		this.#subscribe = createSubscriber();
	}

	get current() {
		this.#subscribe?.();

		if (!this.#document) return null;

		return getActiveElement$1(this.#document);
	}
};

/**
 * An object holding a reactive value that is equal to `document.activeElement`.
 * It automatically listens for changes, keeping the reference up to date.
 *
 * If you wish to use a custom document or shadowRoot, you should use
 * [useActiveElement](https://runed.dev/docs/utilities/active-element) instead.
 *
 * @see {@link https://runed.dev/docs/utilities/active-element}
 */
new ActiveElement$1();

class Context {
    #name;
    #key;
    /**
     * @param name The name of the context.
     * This is used for generating the context key and error messages.
     */
    constructor(name) {
        this.#name = name;
        this.#key = Symbol(name);
    }
    /**
     * The key used to get and set the context.
     *
     * It is not recommended to use this value directly.
     * Instead, use the methods provided by this class.
     */
    get key() {
        return this.#key;
    }
    /**
     * Checks whether this has been set in the context of a parent component.
     *
     * Must be called during component initialisation.
     */
    exists() {
        return hasContext(this.#key);
    }
    /**
     * Retrieves the context that belongs to the closest parent component.
     *
     * Must be called during component initialisation.
     *
     * @throws An error if the context does not exist.
     */
    get() {
        const context = getContext(this.#key);
        if (context === undefined) {
            throw new Error(`Context "${this.#name}" not found`);
        }
        return context;
    }
    /**
     * Retrieves the context that belongs to the closest parent component,
     * or the given fallback value if the context does not exist.
     *
     * Must be called during component initialisation.
     */
    getOr(fallback) {
        const context = getContext(this.#key);
        if (context === undefined) {
            return fallback;
        }
        return context;
    }
    /**
     * Associates the given value with the current component and returns it.
     *
     * Must be called during component initialisation.
     */
    set(context) {
        return setContext(this.#key, context);
    }
}

const sonnerContext = new Context('<Toaster/>');

/* toast-state.svelte.js generated by Svelte v5.39.6 */

let toastsCounter = 0;

class ToastState {
	toasts = [];
	heights = [];

	#findToastIdx = (id) => {
		const idx = this.toasts.findIndex((toast) => toast.id === id);

		if (idx === -1) return null;

		return idx;
	};

	addToast = (data) => {
		if (!isBrowser$1) return;

		this.toasts.unshift(data);
	};

	updateToast = ({ id, data, type, message }) => {
		const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
		const toastToUpdate = this.toasts[toastIdx];

		this.toasts[toastIdx] = {
			...toastToUpdate,
			...data,
			id,
			title: message,
			type,
			updated: true
		};
	};

	create = (data) => {
		const { message, ...rest } = data;
		const id = typeof data?.id === 'number' || data.id && data.id?.length > 0 ? data.id : toastsCounter++;
		const dismissable = data.dismissable === undefined ? true : data.dismissable;
		const type = data.type === undefined ? 'default' : data.type;

		run(() => {
			const alreadyExists = this.toasts.find((toast) => toast.id === id);

			if (alreadyExists) {
				this.updateToast({ id, data, type, message, dismissable });
			} else {
				this.addToast({ ...rest, id, title: message, dismissable, type });
			}
		});

		return id;
	};

	dismiss = (id) => {
		run(() => {
			if (id === undefined) {
				// we're dismissing all the toasts
				this.toasts = this.toasts.map((toast) => ({ ...toast, dismiss: true }));

				return;
			}

			// we're dismissing a specific toast
			const toastIdx = this.toasts.findIndex((toast) => toast.id === id);

			if (this.toasts[toastIdx]) {
				this.toasts[toastIdx] = { ...this.toasts[toastIdx], dismiss: true };
			}
		});

		return id;
	};

	remove = (id) => {
		if (id === undefined) {
			// remove all toasts
			this.toasts = [];

			return;
		}

		// remove a specific toast
		const toastIdx = this.#findToastIdx(id);

		if (toastIdx === null) return;

		this.toasts.splice(toastIdx, 1);

		return id;
	};

	message = (message, data) => {
		return this.create({ ...data, type: 'default', message });
	};

	error = (message, data) => {
		return this.create({ ...data, type: 'error', message });
	};

	success = (message, data) => {
		return this.create({ ...data, type: 'success', message });
	};

	info = (message, data) => {
		return this.create({ ...data, type: 'info', message });
	};

	warning = (message, data) => {
		return this.create({ ...data, type: 'warning', message });
	};

	loading = (message, data) => {
		return this.create({ ...data, type: 'loading', message });
	};

	promise = (promise, data) => {
		if (!data) {
			// Nothing to show
			return;
		}

		let id = undefined;

		if (data.loading !== undefined) {
			id = this.create({
				...data,
				promise,
				type: 'loading',
				message: typeof data.loading === 'string' ? data.loading : data.loading()
			});
		}

		const p = promise instanceof Promise ? promise : promise();
		let shouldDismiss = id !== undefined;

		p.then((response) => {
			if (typeof response === 'object' && response && 'ok' in response && typeof response.ok === 'boolean' && !response.ok) {
				shouldDismiss = false;

				const message = constructPromiseErrorMessage(response);

				this.create({ id, type: 'error', message });
			} else if (data.success !== undefined) {
				shouldDismiss = false;

				const message = typeof data.success === 'function' ? data.success(response) : data.success;

				this.create({ id, type: 'success', message });
			}
		}).catch((error) => {
			if (data.error !== undefined) {
				shouldDismiss = false;

				const message = typeof data.error === 'function' ? data.error(error) : data.error;

				this.create({ id, type: 'error', message });
			}
		}).finally(() => {
			if (shouldDismiss) {
				// Toast is still in load state (and will be indefinitely — dismiss it)
				this.dismiss(id);

				id = undefined;
			}

			data.finally?.();
		});

		return id;
	};

	custom = (component, data) => {
		const id = data?.id || toastsCounter++;

		this.create({ component, id, ...data });

		return id;
	};

	removeHeight = (id) => {
		this.heights = this.heights.filter((height) => height.toastId !== id);
	};

	setHeight = (data) => {
		const toastIdx = this.#findToastIdx(data.toastId);

		if (toastIdx === null) {
			this.heights.push(data);

			return;
		}

		this.heights[toastIdx] = data;
	};

	reset = () => {
		this.toasts = [];
		this.heights = [];
	};
}

function constructPromiseErrorMessage(response) {
	if (response && typeof response === 'object' && 'status' in response) {
		return `HTTP error! Status: ${response.status}`;
	}

	return `Error! ${response}`;
}

const toastState = new ToastState();

function toastFunction(message, data) {
	return toastState.create({ message, ...data });
}

class SonnerState {
	/**
	 * A derived state of the toasts that are not dismissed.
	 */
	#activeToasts = derived(() => toastState.toasts.filter((toast) => !toast.dismiss));

	get toasts() {
		return this.#activeToasts();
	}
}

const basicToast = toastFunction;

const toast = Object.assign(basicToast, {
	success: toastState.success,
	info: toastState.info,
	warning: toastState.warning,
	error: toastState.error,
	custom: toastState.custom,
	message: toastState.message,
	promise: toastState.promise,
	dismiss: toastState.dismiss,
	loading: toastState.loading,

	getActiveToasts: () => {
		return toastState.toasts.filter((toast) => !toast.dismiss);
	}
});

function isAction(action) {
    return action.label !== undefined;
}

const TOAST_LIFETIME$1 = 4000;
const GAP$1 = 14;
const TIME_BEFORE_UNMOUNT = 200;

const DEFAULT_TOAST_CLASSES = {
	toast: '',
	title: '',
	description: '',
	loader: '',
	closeButton: '',
	cancelButton: '',
	actionButton: '',
	action: '',
	warning: '',
	error: '',
	success: '',
	default: '',
	info: '',
	loading: ''
};

function Toast($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// Default lifetime of a toasts (in ms)
		// Default gap between toasts
		// Threshold to dismiss a toast
		// Equal to exit animation duration
		let {
			toast,
			index,
			expanded,
			invert: invertFromToaster,
			position,
			visibleToasts,
			expandByDefault,
			closeButton: closeButtonFromToaster,
			interacting,
			cancelButtonStyle = '',
			actionButtonStyle = '',
			duration: durationFromToaster,
			descriptionClass = '',
			classes: classesProp,
			unstyled = false,
			loadingIcon,
			successIcon,
			errorIcon,
			warningIcon,
			closeIcon,
			infoIcon,
			defaultRichColors = false,
			swipeDirections: swipeDirectionsProp,
			closeButtonAriaLabel,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
		let mounted = false;
		let removed = false;
		let swiping = false;
		let swipeOut = false;
		let isSwiped = false;
		let offsetBeforeRemove = 0;
		let initialHeight = 0;
		toast.duration || durationFromToaster || TOAST_LIFETIME$1;
		let swipeOutDirection = null;
		const isFront = index === 0;
		const isVisible = index + 1 <= visibleToasts;
		const toastType = toast.type;
		const dismissable = toast.dismissable !== false;
		const toastClass = toast.class || '';
		const toastDescriptionClass = toast.descriptionClass || '';

		// height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
		const heightIndex = toastState.heights.findIndex((height) => height.toastId === toast.id) || 0;

		const closeButton = toast.closeButton ?? closeButtonFromToaster;
		toast.duration ?? durationFromToaster ?? TOAST_LIFETIME$1;
		const coords = position.split('-');

		const toastsHeightBefore = toastState.heights.reduce(
			(prev, curr, reducerIndex) => {
				if (reducerIndex >= heightIndex) return prev;

				return prev + curr.height;
			},
			0
		);
		const invert = toast.invert || invertFromToaster;
		const disabled = toastType === 'loading';
		const classes = { ...defaultClasses, ...classesProp };
		toast.title;
		toast.description;
		const offset = Math.round(heightIndex * GAP$1 + toastsHeightBefore);

		// use scaledRectHeight as it's more precise
		// toast was transitioning its scale, so scaledRectHeight isn't accurate
		// setHeight reads heights and toasts state. Untrack the call
		// to avoid triggering this effect when those are modified. e.g. toasts
		// added and removed.
		function deleteToast() {
			removed = true;

			// save the offset for the exit swipe animation
			offsetBeforeRemove = offset;

			toastState.removeHeight(toast.id);

			setTimeout(
				() => {
					toastState.remove(toast.id);
				},
				TIME_BEFORE_UNMOUNT
			);
		}
		toast.promise && toastType === 'loading' || toast.duration === Number.POSITIVE_INFINITY;

		const icon = (() => {
			if (toast.icon) return toast.icon;
			if (toastType === 'success') return successIcon;
			if (toastType === 'error') return errorIcon;
			if (toastType === 'warning') return warningIcon;
			if (toastType === 'info') return infoIcon;
			if (toastType === 'loading') return loadingIcon;

			return null;
		})();

		function LoadingIcon($$renderer) {
			if (loadingIcon) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div${attr_class(clsx$1(cn(classes?.loader, toast?.classes?.loader, 'sonner-loader')))}${attr('data-visible', toastType === 'loading')}>`);
				loadingIcon($$renderer);
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push('<!--[!-->');

				Loader($$renderer, {
					class: cn(classes?.loader, toast.classes?.loader),
					visible: toastType === 'loading'
				});
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<li${attr('tabindex', 0)}${attr_class(clsx$1(cn(restProps.class, toastClass, classes?.toast, toast?.classes?.toast, classes?.[toastType], toast?.classes?.[toastType])))} data-sonner-toast=""${attr('data-rich-colors', toast.richColors ?? defaultRichColors)}${attr('data-styled', !(toast.component || toast.unstyled || unstyled))}${attr('data-mounted', mounted)}${attr('data-promise', Boolean(toast.promise))}${attr('data-swiped', isSwiped)}${attr('data-removed', removed)}${attr('data-visible', isVisible)}${attr('data-y-position', coords[0])}${attr('data-x-position', coords[1])}${attr('data-index', index)}${attr('data-front', isFront)}${attr('data-swiping', swiping)}${attr('data-dismissable', dismissable)}${attr('data-type', toastType)}${attr('data-invert', invert)}${attr('data-swipe-out', swipeOut)}${attr('data-swipe-direction', swipeOutDirection)}${attr('data-expanded', Boolean(expanded || expandByDefault && mounted))}${attr_style(`${restProps.style} ${toast.style}`, {
			'--index': index,
			'--toasts-before': index,
			'--z-index': toastState.toasts.length - index,
			'--offset': `${removed ? offsetBeforeRemove : offset}px`,
			'--initial-height': expandByDefault ? 'auto' : `${initialHeight}px`
		})}>`);

		if (closeButton && !toast.component && toastType !== 'loading' && closeIcon !== null) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<button${attr('aria-label', closeButtonAriaLabel)}${attr('data-disabled', disabled)} data-close-button=""${attr_class(clsx$1(cn(classes?.closeButton, toast?.classes?.closeButton)))}>`);
			closeIcon?.($$renderer);
			$$renderer.push(`<!----></button>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--> `);

		if (toast.component) {
			$$renderer.push('<!--[-->');

			const Component = toast.component;

			$$renderer.push(`<!---->`);
			Component($$renderer, spread_props([toast.componentProps, { closeToast: deleteToast }]));
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');

			if ((toastType || toast.icon || toast.promise) && toast.icon !== null && (icon !== null || toast.icon)) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div data-icon=""${attr_class(clsx$1(cn(classes?.icon, toast?.classes?.icon)))}>`);

				if (toast.promise || toastType === 'loading') {
					$$renderer.push('<!--[-->');

					if (toast.icon) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<!---->`);
						toast.icon($$renderer, {});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push('<!--[!-->');
						LoadingIcon($$renderer);
					}

					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (toast.type !== 'loading') {
					$$renderer.push('<!--[-->');

					if (toast.icon) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<!---->`);
						toast.icon($$renderer, {});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push('<!--[!-->');

						if (toastType === 'success') {
							$$renderer.push('<!--[-->');
							successIcon?.($$renderer);
							$$renderer.push(`<!---->`);
						} else {
							$$renderer.push('<!--[!-->');

							if (toastType === 'error') {
								$$renderer.push('<!--[-->');
								errorIcon?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (toastType === 'warning') {
									$$renderer.push('<!--[-->');
									warningIcon?.($$renderer);
									$$renderer.push(`<!---->`);
								} else {
									$$renderer.push('<!--[!-->');

									if (toastType === 'info') {
										$$renderer.push('<!--[-->');
										infoIcon?.($$renderer);
										$$renderer.push(`<!---->`);
									} else {
										$$renderer.push('<!--[!-->');
									}

									$$renderer.push(`<!--]-->`);
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						$$renderer.push(`<!--]-->`);
					}

					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <div data-content=""><div data-title=""${attr_class(clsx$1(cn(classes?.title, toast?.classes?.title)))}>`);

			if (toast.title) {
				$$renderer.push('<!--[-->');

				if (typeof toast.title !== 'string') {
					$$renderer.push('<!--[-->');

					const Title = toast.title;

					$$renderer.push(`<!---->`);
					Title($$renderer, spread_props([toast.componentProps]));
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`${escape_html(toast.title)}`);
				}

				$$renderer.push(`<!--]-->`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--></div> `);

			if (toast.description) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div data-description=""${attr_class(clsx$1(cn(descriptionClass, toastDescriptionClass, classes?.description, toast.classes?.description)))}>`);

				if (typeof toast.description !== 'string') {
					$$renderer.push('<!--[-->');

					const Description = toast.description;

					$$renderer.push(`<!---->`);
					Description($$renderer, spread_props([toast.componentProps]));
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`${escape_html(toast.description)}`);
				}

				$$renderer.push(`<!--]--></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--></div> `);

			if (toast.cancel) {
				$$renderer.push('<!--[-->');

				if (typeof toast.cancel === 'function') {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<!---->`);
					toast.cancel($$renderer, {});
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');

					if (isAction(toast.cancel)) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx$1(cn(classes?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]-->`);
				}

				$$renderer.push(`<!--]-->`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (toast.action) {
				$$renderer.push('<!--[-->');

				if (typeof toast.action === 'function') {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<!---->`);
					toast.action($$renderer, {});
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push('<!--[!-->');

					if (isAction(toast.action)) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx$1(cn(classes?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]-->`);
				}

				$$renderer.push(`<!--]-->`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--></li>`);
	});
}

function SuccessIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
}

function ErrorIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
}

function WarningIcon($$renderer) {
	$$renderer.push(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
}

function InfoIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
}

function CloseIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}

const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = '24px';
const MOBILE_VIEWPORT_OFFSET = '16px';
const TOAST_LIFETIME = 4000;
const TOAST_WIDTH = 356;
const GAP = 14;
const DARK = 'dark';
const LIGHT = 'light';

function getOffsetObject(defaultOffset, mobileOffset) {
	const styles = {};

	[defaultOffset, mobileOffset].forEach((offset, index) => {
		const isMobile = index === 1;
		const prefix = isMobile ? '--mobile-offset' : '--offset';
		const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;

		function assignAll(offset) {
			['top', 'right', 'bottom', 'left'].forEach((key) => {
				styles[`${prefix}-${key}`] = typeof offset === 'number' ? `${offset}px` : offset;
			});
		}

		if (typeof offset === 'number' || typeof offset === 'string') {
			assignAll(offset);
		} else if (typeof offset === 'object') {
			['top', 'right', 'bottom', 'left'].forEach((key) => {
				const value = offset[key];

				if (value === undefined) {
					styles[`${prefix}-${key}`] = defaultValue;
				} else {
					styles[`${prefix}-${key}`] = typeof value === 'number' ? `${value}px` : value;
				}
			});
		} else {
			assignAll(defaultValue);
		}
	});

	return styles;
}

function Toaster($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// visible toasts amount
		// Viewport padding
		// Mobile viewport padding
		// Default lifetime of a toasts (in ms)
		// Default toast width
		// Default gap between toasts
		function getInitialTheme(t) {
			if (t !== 'system') return t;

			if (typeof window !== 'undefined') {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					return DARK;
				}

				return LIGHT;
			}

			return LIGHT;
		}

		let {
			invert = false,
			position = 'bottom-right',
			hotkey = ['altKey', 'KeyT'],
			expand = false,
			closeButton = false,
			offset = VIEWPORT_OFFSET,
			mobileOffset = MOBILE_VIEWPORT_OFFSET,
			theme = 'light',
			richColors = false,
			duration = TOAST_LIFETIME,
			visibleToasts = VISIBLE_TOASTS_AMOUNT,
			toastOptions = {},
			dir = 'auto',
			gap = GAP,
			loadingIcon: loadingIconProp,
			successIcon: successIconProp,
			errorIcon: errorIconProp,
			warningIcon: warningIconProp,
			closeIcon: closeIconProp,
			infoIcon: infoIconProp,
			containerAriaLabel = 'Notifications',
			class: className,
			closeButtonAriaLabel = 'Close toast',
			onblur,
			onfocus,
			onmouseenter,
			onmousemove,
			onmouseleave,
			ondragend,
			onpointerdown,
			onpointerup,
			$$slots,
			$$events,
			...restProps
		} = $$props;

		function getDocumentDirection() {
			if (dir !== 'auto') return dir;
			if (typeof window === 'undefined') return 'ltr';
			if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose

			const dirAttribute = document.documentElement.getAttribute('dir');

			if (dirAttribute === 'auto' || !dirAttribute) {
				run(() => dir = window.getComputedStyle(document.documentElement).direction ?? 'ltr');

				return dir;
			}

			run(() => dir = dirAttribute);

			return dirAttribute;
		}

		const possiblePositions = Array.from(new Set([
			position,
			...toastState.toasts.filter((toast) => toast.position).map((toast) => toast.position)
		].filter(Boolean)));

		let expanded = false;
		let interacting = false;
		let actualTheme = getInitialTheme(theme);
		const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');

		sonnerContext.set(new SonnerState());
		$$renderer.push(`<section${attr('aria-label', `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel)}`)}${attr('tabindex', -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-1lnj2e8">`);

		if (toastState.toasts.length > 0) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<!--[-->`);

			const each_array = ensure_array_like(possiblePositions);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let position = each_array[index];
				const [y, x] = position.split('-');
				const offsetObject = getOffsetObject(offset, mobileOffset);

				$$renderer.push(`<ol${attributes(
					{
						tabindex: -1,
						dir: getDocumentDirection(),
						class: clsx$1(className),
						'data-sonner-toaster': true,
						'data-sonner-theme': actualTheme,
						'data-y-position': y,
						'data-x-position': x,
						style: restProps.style,
						...restProps
					},
					'svelte-1lnj2e8',
					void 0,
					{
						'--front-toast-height': `${toastState.heights[0]?.height}px`,
						'--width': `${TOAST_WIDTH}px`,
						'--gap': `${gap}px`,
						'--offset-top': offsetObject['--offset-top'],
						'--offset-right': offsetObject['--offset-right'],
						'--offset-bottom': offsetObject['--offset-bottom'],
						'--offset-left': offsetObject['--offset-left'],
						'--mobile-offset-top': offsetObject['--mobile-offset-top'],
						'--mobile-offset-right': offsetObject['--mobile-offset-right'],
						'--mobile-offset-bottom': offsetObject['--mobile-offset-bottom'],
						'--mobile-offset-left': offsetObject['--mobile-offset-left']
					}
				)}><!--[-->`);

				const each_array_1 = ensure_array_like(toastState.toasts.filter((toast) => !toast.position && index === 0 || toast.position === position));

				for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
					let toast = each_array_1[index];

					{
						function successIcon($$renderer) {
							if (successIconProp) {
								$$renderer.push('<!--[-->');
								successIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (successIconProp !== null) {
									$$renderer.push('<!--[-->');
									SuccessIcon($$renderer);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						function errorIcon($$renderer) {
							if (errorIconProp) {
								$$renderer.push('<!--[-->');
								errorIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (errorIconProp !== null) {
									$$renderer.push('<!--[-->');
									ErrorIcon($$renderer);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						function warningIcon($$renderer) {
							if (warningIconProp) {
								$$renderer.push('<!--[-->');
								warningIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (warningIconProp !== null) {
									$$renderer.push('<!--[-->');
									WarningIcon($$renderer);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						function infoIcon($$renderer) {
							if (infoIconProp) {
								$$renderer.push('<!--[-->');
								infoIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (infoIconProp !== null) {
									$$renderer.push('<!--[-->');
									InfoIcon($$renderer);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						function closeIcon($$renderer) {
							if (closeIconProp) {
								$$renderer.push('<!--[-->');
								closeIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push('<!--[!-->');

								if (closeIconProp !== null) {
									$$renderer.push('<!--[-->');
									CloseIcon($$renderer);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							}

							$$renderer.push(`<!--]-->`);
						}

						Toast($$renderer, {
							index,
							toast,
							defaultRichColors: richColors,
							duration: toastOptions?.duration ?? duration,
							class: toastOptions?.class ?? '',
							descriptionClass: toastOptions?.descriptionClass || '',
							invert,
							visibleToasts,
							closeButton,
							interacting,
							position,
							style: toastOptions?.style ?? '',
							classes: toastOptions.classes || {},
							unstyled: toastOptions.unstyled ?? false,
							cancelButtonStyle: toastOptions?.cancelButtonStyle ?? '',
							actionButtonStyle: toastOptions?.actionButtonStyle ?? '',
							closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
							expandByDefault: expand,
							expanded,
							loadingIcon: loadingIconProp,
							successIcon,
							errorIcon,
							warningIcon,
							infoIcon,
							closeIcon,

							$$slots: {
								successIcon: true,
								errorIcon: true,
								warningIcon: true,
								infoIcon: true,
								closeIcon: true
							}
						});
					}
				}

				$$renderer.push(`<!--]--></ol>`);
			}

			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></section>`);
	});
}

const defaultWindow = undefined;

/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement(document) {
    let activeElement = document.activeElement;
    while (activeElement?.shadowRoot) {
        const node = activeElement.shadowRoot.activeElement;
        if (node === activeElement)
            break;
        else
            activeElement = node;
    }
    return activeElement;
}

/* active-element.svelte.js generated by Svelte v5.39.6 */

class ActiveElement {
	#document;
	#subscribe;

	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;

		if (window === undefined) return;

		this.#document = document;

		this.#subscribe = createSubscriber();
	}

	get current() {
		this.#subscribe?.();

		if (!this.#document) return null;

		return getActiveElement(this.#document);
	}
}

/**
 * An object holding a reactive value that is equal to `document.activeElement`.
 * It automatically listens for changes, keeping the reference up to date.
 *
 * If you wish to use a custom document or shadowRoot, you should use
 * [useActiveElement](https://runed.dev/docs/utilities/active-element) instead.
 *
 * @see {@link https://runed.dev/docs/utilities/active-element}
 */
new ActiveElement();

/* persisted-state.svelte.js generated by Svelte v5.39.6 */

function getStorage(storageType, window) {
	switch (storageType) {
		case "local":
			return window.localStorage;

		case "session":
			return window.sessionStorage;
	}
}

/**
 * Creates reactive state that is persisted and synchronized across browser sessions and tabs using Web Storage.
 * @param key The unique key used to store the state in the storage.
 * @param initialValue The initial value of the state if not already present in the storage.
 * @param options Configuration options including storage type, serializer for complex data types, and whether to sync state changes across tabs.
 *
 * @see {@link https://runed.dev/docs/utilities/persisted-state}
 */
class PersistedState {
	#current;
	#key;
	#serializer;
	#storage;
	#subscribe;
	#version = 0;

	constructor(key, initialValue, options = {}) {
		const {
			storage: storageType = "local",
			serializer = { serialize: JSON.stringify, deserialize: JSON.parse },
			syncTabs = true,
			window = defaultWindow
		} = options;

		this.#current = initialValue;
		this.#key = key;
		this.#serializer = serializer;

		if (window === undefined) return;

		const storage = getStorage(storageType, window);

		this.#storage = storage;

		const existingValue = storage.getItem(key);

		if (existingValue !== null) {
			this.#current = this.#deserialize(existingValue);
		} else {
			this.#serialize(initialValue);
		}

		if (syncTabs && storageType === "local") {
			this.#subscribe = createSubscriber();
		}
	}

	get current() {
		this.#subscribe?.();
		this.#version;

		const root = this.#deserialize(this.#storage?.getItem(this.#key)) ?? this.#current;
		const proxies = new WeakMap();

		const proxy = (value) => {
			if (value === null || value?.constructor.name === "Date" || typeof value !== "object") {
				return value;
			}

			let p = proxies.get(value);

			if (!p) {
				p = new Proxy(value, {
					get: (target, property) => {
						this.#version;

						return proxy(Reflect.get(target, property));
					},

					set: (target, property, value) => {
						this.#version += 1;
						Reflect.set(target, property, value);
						this.#serialize(root);

						return true;
					}
				});

				proxies.set(value, p);
			}

			return p;
		};

		return proxy(root);
	}

	set current(newValue) {
		this.#serialize(newValue);
		this.#version += 1;
	}

	#handleStorageEvent = (event) => {
		if (event.key !== this.#key || event.newValue === null) return;

		this.#current = this.#deserialize(event.newValue);
		this.#version += 1;
	};

	#deserialize(value) {
		try {
			return this.#serializer.deserialize(value);
		} catch(error) {
			console.error(`Error when parsing "${value}" from persisted store "${this.#key}"`, error);

			return;
		}
	}

	#serialize(value) {
		try {
			if (value != undefined) {
				this.#storage?.setItem(this.#key, this.#serializer.serialize(value));
			}
		} catch(error) {
			console.error(`Error when writing value from persisted store "${this.#key}" to ${this.#storage}`, error);
		}
	}
}

/**
 * Sanitizes an array of classnames by removing any empty strings.
 */
function sanitizeClassNames(classNames) {
    return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
    getItem: (_key) => null,
    setItem: (_key, _value) => { },
};
const isBrowser = typeof document !== "undefined";

/* storage-keys.svelte.js generated by Svelte v5.39.6 */

const modeStorageKey = box("mode-watcher-mode");
const themeStorageKey = box("mode-watcher-theme");

/**
 * the modes that are supported, used for validation & type
 * derivation
 */
const modes = ["dark", "light", "system"];
function isValidMode(value) {
    if (typeof value !== "string")
        return false;
    return modes.includes(value);
}

/* mode-states.svelte.js generated by Svelte v5.39.6 */

class UserPrefersMode {
	#defaultValue = "system";
	#storage = isBrowser ? localStorage : noopStorage;
	#initialValue = this.#storage.getItem(modeStorageKey.current);
	#value = isValidMode(this.#initialValue) ? this.#initialValue : this.#defaultValue;
	#persisted = this.#makePersisted();

	#makePersisted(value = this.#value) {
		return new PersistedState(modeStorageKey.current, value, {
			serializer: {
				serialize: (v) => v,

				deserialize: (v) => {
					if (isValidMode(v)) return v;

					return this.#defaultValue;
				}
			}
		});
	}

	constructor() {}

	get current() {
		return this.#persisted.current;
	}

	set current(newValue) {
		this.#persisted.current = newValue;
	}
}

class SystemPrefersMode {
	#defaultValue = undefined;
	#track = true;
	#current = this.#defaultValue;

	#mediaQueryState = typeof window !== "undefined" && typeof window.matchMedia === "function"
		? new MediaQuery("prefers-color-scheme: light")
		: { current: false };

	query() {
		if (!isBrowser) return;

		this.#current = this.#mediaQueryState.current ? "light" : "dark";
	}

	tracking(active) {
		this.#track = active;
	}

	constructor() {
		this.query = this.query.bind(this);
		this.tracking = this.tracking.bind(this);
	}

	get current() {
		return this.#current;
	}
}

/**
 * Writable state that represents the user's preferred mode
 * (`"dark"`, `"light"` or `"system"`)
 */
const userPrefersMode = new UserPrefersMode();

/**
 * Readable store that represents the system's preferred mode (`"dark"`, `"light"` or `undefined`)
 */
const systemPrefersMode = new SystemPrefersMode();

/* theme-state.svelte.js generated by Svelte v5.39.6 */

class CustomTheme {
	#storage = isBrowser ? localStorage : noopStorage;
	#initialValue = this.#storage.getItem(themeStorageKey.current);
	#value = this.#initialValue === null || this.#initialValue === undefined ? "" : this.#initialValue;
	#persisted = this.#makePersisted();

	#makePersisted(value = this.#value) {
		return new PersistedState(themeStorageKey.current, value, {
			serializer: {
				serialize: (v) => {
					if (typeof v !== "string") return "";

					return v;
				},

				deserialize: (v) => v
			}
		});
	}

	constructor() {}

	/**
	 * The current theme.
	 * @returns The current theme.
	 */
	get current() {
		return this.#persisted.current;
	}

	/**
	 * Set the current theme.
	 * @param newValue The new theme to set.
	 */
	set current(newValue) {
		this.#persisted.current = newValue;
	}
}

/**
 * A custom theme to apply and persist to the root `html` element.
 */
const customTheme = new CustomTheme();

// Original Source: https://reemus.dev/article/disable-css-transition-color-scheme-change#heading-ultimate-solution-for-changing-color-scheme-without-transitions
let timeoutAction;
let timeoutEnable;
/**
 * Whether this is the first time the function has been
 * called, which will be true for the initial load, where
 * we shouldn't need to disable any transitions, as there
 * is nothing to transition from.
 */
let hasLoaded = false;
let styleElement = null;
// Create reusable style element
function getStyleElement() {
    if (styleElement)
        return styleElement;
    styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`));
    return styleElement;
}
// Perform a task without any css transitions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withoutTransition(action, synchronous = false) {
    if (typeof document === "undefined")
        return;
    // Skip transition disabling on initial load
    if (!hasLoaded) {
        hasLoaded = true;
        action();
        return;
    }
    // In test environments, run synchronously to avoid timing issues
    const isTest = (typeof process !== "undefined" && process.env?.NODE_ENV === "test") ||
        (typeof window !== "undefined" &&
            window.__vitest_worker__);
    if (isTest) {
        action();
        return;
    }
    clearTimeout(timeoutAction);
    clearTimeout(timeoutEnable);
    const style = getStyleElement();
    const disable = () => document.head.appendChild(style);
    const enable = () => {
        if (style.parentNode) {
            document.head.removeChild(style);
        }
    };
    function executeAction() {
        action();
        // defer enable to ensure action completes
        window.requestAnimationFrame(enable);
    }
    // Use requestAnimationFrame for better performance
    if (typeof window.requestAnimationFrame !== "undefined") {
        disable();
        if (synchronous) {
            executeAction();
        }
        else {
            // defer action to next frame to avoid blocking
            window.requestAnimationFrame(() => {
                executeAction();
            });
        }
        return;
    }
    // Fallback for older browsers
    disable();
    timeoutAction = window.setTimeout(() => {
        action();
        timeoutEnable = window.setTimeout(enable, 16);
    }, 16);
}

/* states.svelte.js generated by Svelte v5.39.6 */

const themeColors = box(undefined);
const disableTransitions = box(true);
const synchronousModeChanges = box(false);
const darkClassNames = box([]);
const lightClassNames = box([]);

function createDerivedMode() {
	const current = (() => {
		if (!isBrowser) return undefined;

		const derivedMode = userPrefersMode.current === "system" ? systemPrefersMode.current : userPrefersMode.current;
		const sanitizedDarkClassNames = sanitizeClassNames(darkClassNames.current);
		const sanitizedLightClassNames = sanitizeClassNames(lightClassNames.current);

		function update() {
			const htmlEl = document.documentElement;
			const themeColorEl = document.querySelector('meta[name="theme-color"]');

			if (derivedMode === "light") {
				if (sanitizedDarkClassNames.length) htmlEl.classList.remove(...sanitizedDarkClassNames);
				if (sanitizedLightClassNames.length) htmlEl.classList.add(...sanitizedLightClassNames);

				htmlEl.style.colorScheme = "light";

				if (themeColorEl && themeColors.current) {
					themeColorEl.setAttribute("content", themeColors.current.light);
				}
			} else {
				if (sanitizedLightClassNames.length) htmlEl.classList.remove(...sanitizedLightClassNames);
				if (sanitizedDarkClassNames.length) htmlEl.classList.add(...sanitizedDarkClassNames);

				htmlEl.style.colorScheme = "dark";

				if (themeColorEl && themeColors.current) {
					themeColorEl.setAttribute("content", themeColors.current.dark);
				}
			}
		}

		if (disableTransitions.current) {
			withoutTransition(update, synchronousModeChanges.current);
		} else {
			update();
		}

		return derivedMode;
	})();

	return {
		get current() {
			return current;
		}
	};
}

function createDerivedTheme() {
	const current = (() => {
		customTheme.current;

		if (!isBrowser) return undefined;

		function update() {
			const htmlEl = document.documentElement;

			htmlEl.setAttribute("data-theme", customTheme.current);
		}

		if (disableTransitions.current) {
			withoutTransition(update, run(() => synchronousModeChanges.current));
		} else {
			update();
		}

		return customTheme.current;
	})();

	return {
		get current() {
			return current;
		}
	};
}

/**
 * Derived store that represents the current mode (`"dark"`, `"light"` or `undefined`)
 */
const derivedMode = createDerivedMode();

/**
 * Derived store that represents the current custom theme
 */
createDerivedTheme();

function Sonner_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { $$slots, $$events, ...restProps } = $$props;

		Toaster($$renderer, spread_props([
			{
				theme: derivedMode.current,
				class: 'toaster group',
				style: '--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);'
			},

			restProps
		]));
	});
}

function ContactForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const { currentLanguage } = $$props;
		const schema = createContactSchema(currentLanguage);
		const translate = useTranslations(currentLanguage);

		async function onSubmit(values) {
			const response = await fetch("/api/emails/send", {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},

				body: JSON.stringify(values)
			});

			if (response.ok) {
				toast.success(translate("utils.emails.okResponse"));
			} else {
				toast.error(translate("utils.emails.badResponse"));
			}
		}

		const { form, isSubmitting, errors } = createForm({ initialValues: contactFormInitialValues, extend: [validator({ schema })], onSubmit });

		Sonner_1($$renderer, {});
		$$renderer.push(`<!----> <form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div class="space-y-1">`);
		Input($$renderer, { name: 'name', placeholder: translate("pages.contact.name") });
		$$renderer.push(`<!----> `);

		if (store_get($$store_subs ??= {}, '$errors', errors).name) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="text-sm text-red-500">${escape_html(store_get($$store_subs ??= {}, '$errors', errors).name)}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div> <div class="space-y-1">`);
		Input($$renderer, { name: 'email', placeholder: 'Email', type: 'email' });
		$$renderer.push(`<!----> `);

		if (store_get($$store_subs ??= {}, '$errors', errors).email) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="text-sm text-red-500">${escape_html(store_get($$store_subs ??= {}, '$errors', errors).email)}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div></div> <div class="space-y-1">`);

		Input($$renderer, {
			name: 'subject',
			placeholder: translate("pages.contact.subject")
		});

		$$renderer.push(`<!----> `);

		if (store_get($$store_subs ??= {}, '$errors', errors).subject) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="text-sm text-red-500">${escape_html(store_get($$store_subs ??= {}, '$errors', errors).subject)}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div> <div class="space-y-1">`);

		Textarea($$renderer, {
			name: 'message',
			placeholder: translate("pages.contact.yourMessage"),
			rows: 5
		});

		$$renderer.push(`<!----> `);

		if (store_get($$store_subs ??= {}, '$errors', errors).message) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="text-sm text-red-500">${escape_html(store_get($$store_subs ??= {}, '$errors', errors).message)}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div> `);

		Button($$renderer, {
			class: 'w-full cursor-pointer',
			type: 'submit',
			disabled: store_get($$store_subs ??= {}, '$isSubmitting', isSubmitting),

			children: ($$renderer) => {
				if (store_get($$store_subs ??= {}, '$isSubmitting', isSubmitting)) {
					$$renderer.push('<!--[-->');
					Spinner($$renderer);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> ${escape_html(translate("pages.contact.sendMessage"))}`);
			},

			$$slots: { default: true }
		});

		$$renderer.push(`<!----></form>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const currentLanguage = Astro2.currentLocale ?? EAppLanguages.ENGLISH;
  const translate = useTranslations(currentLanguage);
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 px-6"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-12 text-center text-balance">${translate("pages.contact.letsWorkTogether")}</h2> <div class="grid md:grid-cols-2 gap-12"> <div> <h3 class="text-xl font-semibold mb-6"> ${translate("pages.contact.projectInMind")} </h3> <p class="text-muted-foreground mb-8 leading-relaxed text-justify"> ${translate("pages.contact.projectText")} </p> <div class="space-y-4"> <div class="flex items-center space-x-3"> ${renderComponent($$result, "MailIcon", Mail, { "class": "h-5 w-5 text-primary" })} <span>jadiaz.inf@gmail.com</span> </div> <div class="flex items-center space-x-3"> ${renderComponent($$result, "PhoneIcon", Phone, { "class": "h-5 w-5 text-primary" })} <span>+58 (414) 293 31 11</span> </div> <div class="flex items-center space-x-3"> ${renderComponent($$result, "MapPinIcon", MapPinIcon, { "class": "h-5 w-5 text-primary" })} <span>Caracas, Venezuela</span> </div> </div> <div class="flex space-x-4 mt-8 gap-3 items-center"> ${renderComponent($$result, "GithubButton", GithubButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "$components/shared/ui/github/GithubButton.svelte", "client:component-export": "default" })} ${renderComponent($$result, "LinkedinButton", LinkedinButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "$ui/linkedin/LinkedinButton.svelte", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Card", Card, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", Card_header, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", Card_title, {}, { "default": ($$result4) => renderTemplate`${translate("pages.contact.sendMessage")}` })} ` })} ${renderComponent($$result2, "CardContent", Card_content, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContactForm", ContactForm, { "client:idle": true, "currentLanguage": currentLanguage, "client:component-hydration": "idle", "client:component-path": "$pageComponents/ContactForm.svelte", "client:component-export": "default" })} ` })} ` })} </div> </div> </section>`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, {})} ${renderComponent($$result2, "AboutMeSection", $$AboutMe, {})} ${renderComponent($$result2, "MyExperienceSection", $$MyExperience, {})} ${renderComponent($$result2, "SkillsSection", $$Skills, {})} ${renderComponent($$result2, "ContactSection", $$Contact, {})} ` })}`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/index.astro", void 0);

const $$file = "/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
